import path from 'path';
import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { swc } from 'rollup-plugin-swc3';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json';

// wild way to enable require for .mjs files
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { peerDependencies = {} } = require("./package.json");

function getStyleConfig(fileName) {
  return defineConfig({
    input: `./themes/${fileName}.css`,
    output: {
      file: `dist/${fileName}.css`,
      format: 'es'
    },
    plugins: [
      postcss({
        extract: true,
        minimize: true
      })
    ]
  })
}

export default [
  getStyleConfig('ods-theme'),
  getStyleConfig('ods-light-mode'),
  getStyleConfig('ods-dark-mode'),
  defineConfig({
    input: './src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'esm',
        chunkFileNames: 'index.esm.js',
        entryFileNames: 'index.esm.js',
        inlineDynamicImports: true
      }
    ],
    plugins: [
      postcss({
        minimize: true,
        config: {
          path: "./postcss.config.js",
          ctx: null
        },
        extract: path.resolve('dist/ods-components.css'),
      }),
      json(),
      swc({
        include: /\.[jt]sx?$/,
        exclude: /node_modules/,
        tsconfig: 'tsconfig.json',
        sourceMaps: true,
        minify: true,
        jsc: {
          parser: {
            syntax: "typescript",
          },
          externalHelpers: true,
          target: "es2021",
          minify: {
            compress: true,
            mangle: false
          },
          transform: {
            react: {
              useBuiltins: true,
              development: false,
              runtime: 'automatic'
            }
          }
        }
      }),
      resolve({
        mainFields: ['module', 'main'],
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
        include: /\/node_modules\//
      })
    ],
    external: [...Object.keys(peerDependencies), 'react/jsx-runtime']
  }),
  {
    input: './src/index.ts',
    output: [{ file: 'dist/index.d.ts',  format: 'es', inlineDynamicImports: true }],
    external: [/\.css$/],
    plugins: [json(), dts({compilerOptions: {
      preserveSymlinks: false
    }})],
  }
];
