import tseslint from 'typescript-eslint'
import base from './index.js'

export default tseslint.config(...base, {
  ...vue.configs['flat/essential'],
  languageOptions: {
    ...vue.configs['flat/essential'][1].languageOptions,
    parserOptions: {
      parser: tseslint.parser,
    },
  },
})
