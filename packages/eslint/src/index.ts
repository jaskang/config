import gitignore, { type FlatConfigItem } from 'eslint-config-flat-gitignore'
import tseslint, { type ConfigWithExtends } from 'typescript-eslint'
import type { Linter } from 'eslint'
import ignores from './configs/ignores'
import javascript from './configs/javascript'
import typescript from './configs/typescript'
import vue from './configs/vue'
import prettier from './configs/prettier'

export type JasOptions = {
  vue?: boolean
  typescript?: boolean
}

export function config(options: JasOptions = {}, ...userConfigs: Linter.FlatConfig[]) {
  const { vue: vueOptions = true, typescript: tsOptions = true } = options
  const configs: ConfigWithExtends[] = [gitignore(), ...ignores(), ...javascript(), ...userConfigs, ...prettier()]
  if (tsOptions) {
    configs.push(...typescript())
  }
  if (vueOptions) {
    configs.push(...vue({ typescript: !!tsOptions }))
  }
  return tseslint.config(...configs) as Linter.FlatConfig[]
}

export default config
