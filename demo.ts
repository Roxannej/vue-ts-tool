{
  "name": "vue-ts-tool",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "dev": "cross-env NODE_ENV=development rollup -cw",
    "build": "rollup -c"
  },
  "external": [
    "vue"
  ],
  "keywords": [
    "vue",
    "composition-api",
    "hooks",
    "vue3",
    "composable"
  ],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@vue/composition-api": "^1.0.0-rc.6",
    "typescript": "^4.2.3",
    "vue-demi": "^0.7.4"
  },
  "devDependencies": {
    "@rollup/plugin-alias": "^3.1.2",
    "@rollup/plugin-commonjs": "^18.0.0",
    "@rollup/plugin-node-resolve": "^11.2.1",
    "@vue/compiler-sfc": "^3.0.10",
    "jest": "^26.6.3",
    "rollup": "^2.44.0",
    "rollup-plugin-serve": "^1.1.0",
    "rollup-plugin-typescript2": "^0.30.0",
    "rollup-plugin-vue": "^6.0.0",
    "ts-jest": "^26.5.4"
  },
  "peerDependencies": {
    "@vue/composition-api": "^1.0.0-beta.1",
    "vue": "^2.0.0 || >=3.0.0-rc.0"
  },
  "peerDependenciesMeta": {
    "@vue/composition-api": {
      "optional": true
    }
  }
}