const fs = require('fs');
const path = require('path');

function readIndexFilesFromSubdirs(baseDir) {
    const index = {
        pages: {}
    };

    try {
    const files = fs.readdirSync(baseDir);

    files.forEach(file => {
            const subDirPath = path.join(baseDir, file);
            const stats = fs.statSync(subDirPath);
            if (stats.isDirectory()) {
                const indexPath = path.join(subDirPath, 'index.json');
                if (fs.existsSync(indexPath)) {
                    try {
                        const data = fs.readFileSync(indexPath, 'utf8');
                        const jsonData = JSON.parse(data);
                        index.pages[file] = jsonData;
                        if (jsonData.template) {
                            console.log(`Using template: ./templates/${jsonData.template}`);
                            fs.cpSync(`./templates/${jsonData.template}.html`, `${subDirPath}/index.html`);
                        }
                    } catch (err) {
                        console.error(`Error reading or parsing JSON in file: ${indexPath}`, err);
                    }
                } else {
                    console.log(`index.json not found in ${subDirPath}`);
                }
            }
        });
    } catch (err) {
        console.error(`Error reading directory: ${err}`);
    }

    return index;
}

const baseDirectory = './galleries/viewer';
const index = readIndexFilesFromSubdirs(baseDirectory);

//console.log(`Contents of index:`, index);

fs.writeFileSync("./galleries/viewer/index.json", JSON.stringify(index, null, 2), 'utf8');