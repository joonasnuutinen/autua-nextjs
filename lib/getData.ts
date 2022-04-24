import path from "path"
import fs from "fs"
import parse from "./parse"

const getData = (dir: string) => {
  const dataPath = path.join(process.cwd(), "data", `${dir}.md`)
  const dataFile = fs.readFileSync(dataPath, 'utf8')
  return parse(dataFile)
}

export default getData
