import * as fs from "fs";

const readFile = (path: string) => {
  return fs.readFileSync(path, 'utf-8')
}

export default {
  readFile
}
