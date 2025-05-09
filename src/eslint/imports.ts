import { type ConfigWithExtends } from 'typescript-eslint'
import * as pluginImportX from 'eslint-plugin-import-x'

export default function imports(): ConfigWithExtends {
  return {
    plugins: {
      import: pluginImportX,
    },
    rules: {
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-self-import': 'error',
    },
  }
}
