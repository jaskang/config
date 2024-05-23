import gitignore from 'eslint-config-flat-gitignore'
import { type Linter } from 'eslint'
import tseslint, { type ConfigWithExtends } from 'typescript-eslint'
import ignores from './configs/ignores'
import javascript from './configs/javascript'
import perfectionist from './configs/perfectionist'
import typescript from './configs/typescript'
import vue from './configs/vue'

export default function (options: { vue?: boolean; typescript?: boolean } = {}, ...userConfigs: Linter.FlatConfig[]) {
  const { vue: vueOptions, typescript: tsOptions } = options
  const configs: ConfigWithExtends[] = [gitignore(), ...ignores(), ...javascript(), ...perfectionist(), ...userConfigs]
  if (tsOptions) {
    configs.push(...typescript())
  }
  if (vueOptions) {
    configs.push(...vue({ typescript: !!tsOptions }))
  }
  return tseslint.config(...configs)
}
