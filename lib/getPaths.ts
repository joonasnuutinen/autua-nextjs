import fs from "fs"
import path from "path"

const getPaths = (dir: string) => {
  const fullPath = path.join(process.cwd(), 'data', dir)
  const fileNames = fs.readdirSync(fullPath)
  
  return fileNames.filter(name => name !== "index.md").map(name => {
    const slug = name.replace(/.md$/, "").split("/")
    return {
      params: {
        slug
      }
    }
  })
}

export default getPaths