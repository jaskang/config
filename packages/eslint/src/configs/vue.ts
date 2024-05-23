import tslint, { type ConfigWithExtends } from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default function vue(options: { typescript: boolean }): ConfigWithExtends[] {
  return [
    ...pluginVue.configs['flat/essential'],
    {
      files: ['*.vue', '**/*.vue'],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.vue'],
          parser: options.typescript ? tslint.parser : null,
          sourceType: 'module',
        },
      },
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ]
}
