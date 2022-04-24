import getData from "./getData"
import { HeaderData } from "../types"
import getUpload from "./getUpload"

const getTemplatePart = (name: string) => {
  return getData(name)
}

export default getTemplatePart

export const getHeader = () => {
  const headerData = getTemplatePart("header") as HeaderData
  const { logo: { uploadName, width } } = headerData
  const logoUpload = getUpload(uploadName)
  return {
    logo: logoUpload,
    logoWidth: width
  }
}

export const getFooter = () => {
  return getTemplatePart("footer")
}
