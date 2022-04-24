import parse from "./parse"
import getDataFile from "./getDataFile"
import getTemplatePart from "./getTemplatePart"

const getPageData = (slug: string) => {
  const file = getDataFile(`pages/${slug}`)
  const pageData = parse(file)
  const footer = getTemplatePart("footer")
  return {
    ...pageData,
    footer
  }
}

export default getPageData
