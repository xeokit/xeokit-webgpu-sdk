#!/usr/bin/env node

//-----------------------------------------------------------------------------------
// Generates ./convert-models.sh from ./index.json and index.json
//-----------------------------------------------------------------------------------

const pipelines = require("../models/pipelines.json");
const models = require("../models/index.json");
const configs = require("./../configs.json");
const fs = require('fs');

const script = ["# Generated by @xeokit/demos ./build-convert-models.js"];

let numToConvert = 0;
let numConverted = 0;

console.log(`[build-convert-models.js] Generating ./convert-models.sh from ./pipelines.json and ./models.json`);

function logError(msg) {
    console.error(`[build-convert-models] ${msg}`);
}

function parseStringTemplate(str, obj) {
    let parts = str.split(/\$\{(?!\d)[\wæøåÆØÅ]*\}/);
    let args = str.match(/[^{\}]+(?=})/g) || [];
    let parameters = args.map(argument => obj[argument] || (obj[argument] === undefined ? "" : obj[argument]));
    return String.raw({raw: parts}, ...parameters);
}

try {
    const pipelineLookup = {};
    for (let i = 0, len = pipelines.pipelines.length; i < len; i++) {
        const pipeline = pipelines.pipelines[i];
        pipelineLookup[pipeline.id] = pipeline;
    }
    for (let i = 0, len = models.models.length; i < len; i++) {
        const model = models.models[i];
        const modelId = model.id;
        const pipelineIds = model.pipelines;
        for (let j = 0, lenj = pipelineIds.length; j < lenj; j++) {
            const pipelineId = pipelineIds[j];
            const pipeline = pipelineLookup[pipelineId];
            if (!pipeline) {
                console.error(`Model ${modelId} refers to unresolved pipeline ${pipelineId}`);
                continue;
            }
            if (pipeline.cmd) {
                const dataModelDir = `./models/${modelId}/${pipelineId}/`;
                if (dataModelDir !== "" && !fs.existsSync(dataModelDir)) {
                    fs.mkdirSync(dataModelDir, {recursive: true});
                }
                numToConvert++;
            }
        }
    }
    script.push(`echo [convert-models.sh] Converting ${numToConvert} files...`);

    for (let i = 0, len = models.models.length; i < len; i++) {
        const model = models.models[i];
        const modelId = model.id;
        const pipelineIds = model.pipelines;
        if (!pipelineIds || pipelineIds.length === 0) {
            continue;
        }
        let numModelPipelinesWithCommands = 0;
        for (let j = 0, lenj = pipelineIds.length; j < lenj; j++) {
            const pipelineId = pipelineIds[j];
            const pipeline = pipelineLookup[pipelineId];
            if (pipeline.cmd) {
                numModelPipelinesWithCommands++;
            }
        }
        if (numModelPipelinesWithCommands === 0) {
            continue;
        }
        script.push(`\n# --------------------------------------`);
        script.push(`# ${model.id}`);
        script.push(`# --------------------------------------`);
        script.push(`echo [convert-models.sh] Converting ${model.id}`);
        for (let j = 0, lenj = pipelineIds.length; j < lenj; j++) {
            const pipelineId = pipelineIds[j];
            const pipeline = pipelineLookup[pipelineId];
            if (pipeline.cmd) {
                script.push(`\n# ${pipelineId}`);
                script.push(parseStringTemplate(pipeline.cmd, {modelId, ...configs}));
                numConverted++;
                script.push(`echo [convert-models.sh] Converted ${model.id} via ${pipeline.id}`);
                script.push(`echo [convert-models.sh] ${numConverted} out of ${numToConvert} conversions done`);

            }
            const modelIndex = [
                `# ${modelId}`
            ];
            fs.writeFileSync(`./models/${modelId}/${pipelineId}/index.md`, modelIndex.join("\n"), 'utf8');
        }
    }
    fs.writeFileSync("convert-models.sh", script.join("\n"));
    process.exit(1);

} catch (err) {
    logError(err);
    process.exit(-1);
}