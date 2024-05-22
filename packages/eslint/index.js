import gitignore from 'eslint-config-flat-gitignore'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import perfectionist from 'eslint-plugin-perfectionist'
import vue from 'eslint-plugin-vue'

export default tseslint.config(gitignore(), eslint.configs.recommended, ...tseslint.configs.recommended, {
  plugins: [perfectionist],
  rules: {
    'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-named-imports': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: [
          'type',
          'vue',
          'react',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'style',
          'object',
          'side-effect',
          'side-effect-style',
          'unknown',
        ],
        'custom-groups': {
          value: { react: ['react', 'react-*'], vue: ['vue', 'vue-*'] },
          type: { react: 'react', vue: 'vue' },
        },
        'internal-pattern': ['@/**', '#/**'],
      },
    ],
  },
})

// module.exports = {
//   parserOptions: {
//     parser: {
//       js: "espree",
//       jsx: "espree",

//       ts: "@typescript-eslint/parser",
//       tsx: "@typescript-eslint/parser",

//       // Leave the template parser unspecified, so that it could be determined by `<script lang="...">`
//     },
//     extraFileExtensions: [".vue"],
//     ecmaVersion: "latest",
//     sourceType: "module",
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   env: {
//     es2021: true,
//     browser: true,
//     node: true,
//   },
//   plugins: ["@typescript-eslint", "simple-import-sort", "import", "prettier"],
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:prettier/recommended",
//   ],
//   settings: {
//     "import/resolver": {
//       node: { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"] },
//     },
//   },
//   overrides: [
//     {
//       files: ["*.ts", "*.tsx", "*.vue"],
//       rules: {
//         // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
//         // does not work with type definitions
//         "no-unused-vars": "off",
//         "@typescript-eslint/no-unused-vars": "warn",
//       },
//     },
//   ],
//   rules: {
//     "prettier/prettier": "warn",
//     "simple-import-sort/imports": "error",
//     "simple-import-sort/exports": "error",
//     "import/first": "error",
//     "import/newline-after-import": "error",
//     "import/no-duplicates": "error",

//     '@typescript-eslint/ban-ts-comment': 'off',
//     '@typescript-eslint/ban-types': [
//       "error",
//       {
//         "types": {
//           // un-ban a type that's banned by default
//           "{}": false
//         },
//         "extendDefaults": true
//       }
//     ],
//     // vue
//     'vue/multi-word-component-names': 'off',
//   },
//   overrides: [],
//   reportUnusedDisableDirectives: true,
//   ignorePatterns: [
//     '*.min.*',
//     '*.d.ts',
//     'CHANGELOG.md',
//     'dist',
//     'LICENSE*',
//     'output',
//     'out',
//     'coverage',
//     'public',
//     'temp',
//     'package-lock.json',
//     'pnpm-lock.yaml',
//     'yarn.lock',
//     '__snapshots__',
//     // ignore for in lint-staged
//     '*.css',
//     '*.png',
//     '*.ico',
//     '*.toml',
//     '*.patch',
//     '*.txt',
//     '*.crt',
//     '*.key',
//     'Dockerfile',
//     // force include
//     '!.github',
//     '!.vitepress',
//     '!.vscode',
//     // force exclude
//     '.vitepress/cache',
//   ],
// };
