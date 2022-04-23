import fs from "fs"
import matter from "gray-matter"
import path from "path"
import showdown from "showdown"

export const mdToHtml = (md: string): string => {
  const converter = new showdown.Converter()
  return converter.makeHtml(md)
}

const parse = async (_path: string): Promise<matter.GrayMatterFile<string>["data"]> => {
  const filePath = `${_path}.md`
  const fullPath = path.join(process.cwd(), 'data', filePath)
  const file = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(file)

  return {
    ...(data as { title: string }),
    content: mdToHtml(content)
  }
}

export default parse