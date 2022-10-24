import babel  from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve  from '@rollup/plugin-node-resolve';
import styles from "rollup-plugin-styles";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

const dev = process.env.NODE_ENV === "dev"
const MODES = ['cjs', 'esm'];

export default MODES.map(item => {
    const config = {
        input: `src/index.tsx`,
        output: {
            name: "ReactSimplePackageTemplate",
            file: `dist/index.${item}${dev ? '' : '.min'}.js`,
            format: item,
            sourcemap: true,
            exports: "auto",
            globals: {
                'react': 'React'
            }
        },
        external: ["prop-types", "react"],
        plugins: [
            resolve(),
            styles(),
            babel({
                babelHelpers: "bundled",
                exclude: ['node_modules/**']
            }),
            commonjs(),
            typescript()
        ]
    };
    if (!dev) {
        delete config.output.sourcemap;
        delete config.plugins.sourcemap
        config.plugins = [...config.plugins, terser()]
    }
    return config;
});
