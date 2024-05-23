import tslint, { type ConfigWithExtends } from 'typescript-eslint'

export default function typescript(): ConfigWithExtends[] {
  return [
    ...tslint.configs.recommended,
    // {
    //   languageOptions: {
    //     parser: tslint.parser,
    //     sourceType: 'module',
    //     // parserOptions: {
    //     //   extraFileExtensions: ['.vue'],
    //     // },
    //   },
    // },
  ]
}
