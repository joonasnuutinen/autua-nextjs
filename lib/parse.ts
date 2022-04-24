import fs from "fs"
import matter from "gray-matter"
import path from "path"
import showdown from "showdown"

export const mdToHtml = (md: string): string => {
  const converter = new showdown.Converter()
  return converter.makeHtml(md)
}

const parse = (file: string): matter.GrayMatterFile<string>["data"] => {
  const { data, content } = matter(file)

  return {
    ...(data as { title: string }),
    content: mdToHtml(content)
  }
}

export default parse