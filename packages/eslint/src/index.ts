import gitignore from 'eslint-config-flat-gitignore'
import tseslint, { type ConfigWithExtends } from 'typescript-eslint'
import type { Linter } from 'eslint'
import ignores from './configs/ignores'
import javascript from './configs/javascript'
import typescript from './configs/typescript'
import react from './configs/react'
import vue from './configs/vue'
import prettier from './configs/prettier'
import perfectionist from './configs/perfectionist'

export type Options = {
  react?: boolean
  vue?: boolean
  typescript?: boolean
}

export function config(options: Options = {}, ...userConfigs: ConfigWithExtends[]) {
  const { vue: vueOptions = true, typescript: tsOptions = true, react: reactOptions } = options
  const configs: ConfigWithExtends[] = [gitignore(), ...ignores(), ...javascript()]
  if (tsOptions) {
    configs.push(...typescript())
  }
  configs.push(...perfectionist())
  if (vueOptions) {
    configs.push(...vue({ typescript: !!tsOptions }))
  }
  if (reactOptions) {
    configs.push(...react())
  }
  configs.push(...userConfigs, ...prettier())
  return tseslint.config(...(configs as ConfigWithExtends[])) as ConfigWithExtends[]
}

export default config
