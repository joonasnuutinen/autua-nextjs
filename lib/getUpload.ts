import sizeOf from "image-size"
import path from "path"
import { ImageData, Upload, UploadsData, ImageDimensions } from "../types"
import getData from "./getData"

const getAllImageData = () => {
  const uploads = getData("uploads") as UploadsData
  return uploads.images
}

const getDimensions = (uploadName: string): ImageDimensions => {
  const fullPath = path.join(process.cwd(), "public/uploads", uploadName)
  const { width, height } = sizeOf(fullPath)
  return { width, height }
}

const getUpload = (fileName: string): Upload | null => {
  const allUploads = getAllImageData()
  console.log(allUploads)
  const upload = allUploads.find(u => u.file === fileName)
  const dimensions = getDimensions(fileName)
  return upload ? {
    src: `/uploads/${fileName}`,
    alt: upload.alt,
    dimensions
  } : null
}

export default getUpload
