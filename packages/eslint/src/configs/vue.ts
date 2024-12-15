import tslint, { type ConfigWithExtends } from 'typescript-eslint'
import vuePlugin from 'eslint-plugin-vue'
import typescriptEslint from 'typescript-eslint'

export default function vue(): ConfigWithExtends {
  return {
    extends: [vuePlugin.configs['flat/essential']],
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
        parser: typescriptEslint.parser,
      },
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  }
}
