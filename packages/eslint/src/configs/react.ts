import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import refresh from 'eslint-plugin-react-refresh'
import { GLOB_SRC } from '../globs'
import ts, { type ConfigWithExtends } from 'typescript-eslint'

export default function typescript(): ConfigWithExtends[] {
  return [
    {
      plugins: {
        react: react,
        'react-hooks': hooks,
        'react-refresh': refresh,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    {
      files: [GLOB_SRC],
      languageOptions: {
        // FIXME: any
        parser: ts.parser as any,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          jsxPragma: null, // for @typescript/eslint-parser
        },
      },
      rules: {
        // recommended rules react-hooks
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',

        // react refresh
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

        ...react.configs.flat.recommended.rules,
        // react runtime
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
      },
    },
  ]
}
