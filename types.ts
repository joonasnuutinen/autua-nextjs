export interface PageData {
  title: string
  content: string
  header: HeaderProps
  footer: FooterProps
}

export type PageComponent = (props: PageData) => JSX.Element

export interface HeaderData {
  logo: {
    uploadName: string
    width: number
  }
  content: string
}

export interface HeaderProps {
  logo: Upload
  logoWidth: number
}
export type HeaderComponent = (props: HeaderProps) => JSX.Element

export interface FooterProps {
  content: string
}
export type FooterComponent = (props: FooterProps) => JSX.Element

export interface ImageData {
  file: string
  alt: string
}

export interface UploadsData {
  images: ImageData[]
  content: string
}

export interface Upload {
  src: string
  alt: string
  dimensions: ImageDimensions
}

export interface ImageDimensions {
  width: number | undefined
  height: number | undefined
}
