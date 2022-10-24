import commonjs from '@rollup/plugin-commonjs';
import resolve  from '@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";

const packageJson = require("./package.json");

export default {
    input: `src/index.tsx`,
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    external: ["react"],
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
    ]
};