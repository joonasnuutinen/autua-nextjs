import path from "path"
import fs from "fs"

const getDataFile = (dir: string) => {
  const dataPath = path.join(process.cwd(), "data", `${dir}.md`)
  return fs.readFileSync(dataPath, 'utf8')
}

export default getDataFile
