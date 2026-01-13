import pluginVue from 'eslint-plugin-vue'
import { GLOB_VUE } from '../globs'
import typescriptEslint, { type ConfigWithExtends } from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export const vue = defineConfig({
  files: [GLOB_VUE],
  extends: [pluginVue.configs['flat/essential']],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      extraFileExtensions: ['.vue'],
      sourceType: 'module',
      parser: typescriptEslint.parser,
    },
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
})
