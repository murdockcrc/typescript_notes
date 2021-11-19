import { emphasizeString } from './lib/language'

class Main {
  render(): any {
    console.log('rendering...')
    emphasizeString('useless_string', 1)
  }
}

export { Main }