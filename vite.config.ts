import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import type { Plugin } from "vite";
import { optimize } from "wa-map-optimizer";
import { transform } from "esbuild";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: "./index.html",
                main: "./src/main.ts",
            },
        },
    },
    plugins: [mapOptimizer()],
    server: {
        host: "localhost",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
        },
        open: "/",
    },
});

// Map Optimizer Vite Plugin
function mapOptimizer(mapPath: string = "./map.json"): Plugin {
    const distFolder = "./dist";
    return {
        name: "map-optimizer",
        load() {
            this.addWatchFile(mapPath);
        },
        async closeBundle() {
            await optimize(mapPath, {
                logs: false,
                output: {
                    path: distFolder,
                },
            });

            const mapFile = await fs.promises.readFile(mapPath);
            const map = JSON.parse(mapFile.toString());

            if (!map?.properties) {
                return;
            }

            const scriptProperty = map.properties.find((property) => property.name === "script");

            if (!fs.existsSync(distFolder)) {
                throw new Error(`Cannot find ${distFolder} build folder`);
            }

            const mapImagePath = "./map.png";

            if (fs.existsSync(mapImagePath)) {
                await fs.promises.copyFile(mapImagePath, `${distFolder}/map.png`);
            }

            const assetsFolder = `${distFolder}/assets`;

            if (!fs.existsSync(assetsFolder)) {
                throw new Error(`Cannot find ${assetsFolder} assets build folder`);
            }

            const scriptName = path.parse(scriptProperty.value).name;
            const fileName = fs.readdirSync(assetsFolder).filter(asset => asset.startsWith(scriptName));

            if (!fileName) {
                throw new Error(`Undefined ${fileName} script file`);
            }

            const optimizedMapFilePath = `${distFolder}/map.json`;

            if (!fs.existsSync(optimizedMapFilePath)) {
                throw new Error(`Unknown optimized map file on: ${optimizedMapFilePath}`);
            }

            const optimizedMapFile = await fs.promises.readFile(optimizedMapFilePath);
            const optimizedMap = JSON.parse(optimizedMapFile.toString());

            if (!optimizedMap?.properties) {
                throw new Error("Undefined properties on map optimized! Something was wrong!");
            }

            for (const property of optimizedMap.properties) {
                if (property.name === "script") {
                    property.value = `assets/${fileName}`;
                    break;
                }
            }

            await fs.promises.writeFile(optimizedMapFilePath, JSON.stringify(optimizedMap), null, 0);
        }
    };
}
