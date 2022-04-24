import getData from "./getData"
import { getHeader, getFooter } from "./getTemplatePart"

const getPageData = (slug: string) => {
  const pageData = getData(`pages/${slug}`)
  const header = getHeader()
  const footer = getFooter()
  return {
    ...pageData,
    header,
    footer
  }
}

export default getPageData
