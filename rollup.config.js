import vue from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2'
import alias from '@rollup/plugin-alias';

import serve from 'rollup-plugin-serve'
const resolveJs = (p) => path.resolve(__dirname, p)
const pkgJson = require(resolve('./package.json'))

const extensions= ['.js', '.ts', '.vue','.test.ts']

const plugins = [
    alias({
        entries: {
            'vue': 'vue/dist/vue.runtime.esm-browser.prod.js'
        }
    }),
    resolve({ extensions, browser: true}),
    commonjs(),
    vue(),
    typescript({
        include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
        useTsconfigDeclarationDir: true
    }),
]

if (process.env.NODE_ENV === 'development') {
    plugins.push(serve({
        historyApiFallback: true,
        contentBase: ['dev', 'dist']
    }))
}

export default {
    input: resolveJs('./hooks/index.ts'),
    external: [],
    plugins,
    output: [
        {
            file: 'dist/bundle.js',
            format: 'umd',
            name: 'file'
        },
    ],
}