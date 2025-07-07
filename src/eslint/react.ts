import { GLOB_SRC } from '../globs'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import type { ConfigWithExtends } from 'typescript-eslint'

export default function react(): ConfigWithExtends[] {
  return [
    {
      files: [GLOB_SRC],
      settings: { react: { version: '19.0' } },
      extends: [
        reactPlugin.configs.flat.recommended as ConfigWithExtends,
        reactPlugin.configs.flat['jsx-runtime'] as ConfigWithExtends,
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite,
      ],
      rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      },
    },
  ]
}
