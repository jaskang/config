import * as pluginImportX from 'eslint-plugin-import-x'
import type { Config } from 'eslint/config'

export const imports: Config = {
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
