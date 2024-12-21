#!/usr/bin/env node
import {Data} from "@xeokit/data";
import {Scene} from "@xeokit/scene";
import {SDKError} from "@xeokit/core";
import {loadCityJSON} from "@xeokit/cityjson";
import {saveXGF} from "packages/xgf";

const commander = require('commander');
const npmPackage = require('./package.json');
const fs = require('fs');

const program = new commander.Command();

program.version(npmPackage.version, '-v, --version');

program
    .option('-i, --input [file]', 'path to input CityJSON file')
    .option('-o, --output [file]', 'path to output XGF file');

program.on('--help', () => {
    console.log(`\n\nXGF version: 10`);
});

program.parse(process.argv);

const options = program.opts();

if (options.input === undefined) {
    console.error('[cityjson2xgf] Error: please specify a path to a CityJSON input file (-i).');
    program.help();
    process.exit(1);
}

if (options.output === undefined) {
    console.error('[cityjson2xgf] Error: please specify output XGF file path (-o).');
    program.help();
    process.exit(1);
}

function log(msg) {
    if (options.log) {
        console.log(msg);
    }
}

async function main() {

    log(`[cityjson2xgf] Running cityjson2xgf v${npmPackage.version}...`);
    log(`[cityjson2xgf] Reading CityJSON file ${options.input}...`);

    let fileData;

    try {
        fileData = fs.readFileSync(options.input);
    } catch (err) {
        console.error(`[cityjson2xgf] Error reading CityJSON file: ${err}`);
        process.exit(1);
    }

    const data = new Data();

    const dataModel = data.createModel({
        id: "foo"
    });

    if (dataModel instanceof SDKError) {
        console.error(`[cityjson2xgf] Error converting CityJSON file: ${dataModel.message}`);
        process.exit(1);
    } else {
        const scene = new Scene();
        const sceneModel = scene.createModel({
            id: "foo"
        });
        if (sceneModel instanceof SDKError) {
            console.error(`[cityjson2xgf] Error converting CityJSON file: ${sceneModel.message}`);
            process.exit(1);
        } else {
            loadCityJSON({fileData, dataModel, sceneModel}).then(() => {
                sceneModel.build().then(() => {
                    dataModel.build();
                    const xgfArrayBuffer = saveXGF({dataModel, sceneModel});
                    const outputDir = getBasePath(options.output).trim();
                    if (outputDir !== "" && !fs.existsSync(outputDir)) {
                        fs.mkdirSync(outputDir, {recursive: true});
                    }
                    fs.writeFileSync(options.output, Buffer.from(xgfArrayBuffer));
                    log(`[cityjson2xgf] Created XGF file: ${options.output}`);
                    process.exit(0);
                }).catch((err) => {
                    console.error(`[cityjson2xgf] Error converting CityJSON file: ${err}`);
                    process.exit(1);
                });
            }).catch((err) => {
                console.error(`[cityjson2xgf] Error converting CityJSON file: ${err}`);
                process.exit(1);
            });
        }
    }
}

function getBasePath(src) {
    const i = src.lastIndexOf("/");
    return (i !== 0) ? src.substring(0, i + 1) : "";
}

main().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});
