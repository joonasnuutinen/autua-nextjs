export interface PageData {
  title: string
  content: string
  footer: FooterProps
}

export type PageComponent = (props: PageData) => JSX.Element

export interface FooterProps {
  content: string
}
export type FooterComponent = (props: FooterProps) => JSX.Element
