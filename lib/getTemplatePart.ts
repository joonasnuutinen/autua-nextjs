import getDataFile from "./getDataFile"
import parse from "./parse"

const getTemplatePart = (name: string) => {
  const file = getDataFile(name)
  return parse(file)
}

export default getTemplatePart
