import vuePlugin from 'eslint-plugin-vue'
import { GLOB_VUE } from '../globs'
import typescriptEslint, { type ConfigWithExtends } from 'typescript-eslint'

export default function vue(): ConfigWithExtends[] {
  return [
    {
      files: [GLOB_VUE],
      extends: [vuePlugin.configs['flat/essential']],
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
    },
  ]
}
