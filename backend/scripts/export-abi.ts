import * as fs from 'fs';
import {resolve} from 'path';
const {readdir} = require('fs').promises;

async function getFiles(dir: string) {
    const dirents = await readdir(dir, {withFileTypes: true});
    const files = await Promise.all(dirents.map((dirent : any) => {
        const res = resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return Array.prototype.concat(... files);
}

async function extractAbi() {
    const mainFolder = "artifacts/contracts/";
    (await getFiles(mainFolder)).forEach((file) => {
        if (!file.includes(".dbg.json")) {
            const parentDirectory = __dirname.substr(0, __dirname.lastIndexOf("/"));
            const abiFolder = parentDirectory + "/abis";

            try {
                if (!fs.existsSync(abiFolder)) {
                    fs.mkdirSync(abiFolder);
                }
            } catch (err) {
                console.error(err);
            }

            let data: any = fs.readFileSync(file);

            fs.writeFileSync(`abis/${
                file.substr(file.lastIndexOf("/") + 1)
            }`, JSON.stringify(JSON.parse(data).abi));
        }
    });

};

extractAbi().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
