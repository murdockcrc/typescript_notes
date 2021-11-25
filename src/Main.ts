import { emphasizeString } from './lib/language'
import * as Templates from './template'                   /* Resolves because of the rootDirs in the tsconfig file */
// import * as config from './config.json'                // This only work in Node ModuleResolution, browsers do not allow loading Json files, only JS files

declare module './lib/language' {                         // Augment the module so that it supports the property `extras`, which is not defined in the declaration file but exists in the JS source
  export function emphasizeString(string: string, magnitude: number, extras: string): string
}

class Main {
  render(): any {
    console.log('rendering...')
    emphasizeString('useless_string', 1)
    Templates.template_one()
  }
}

export { Main }