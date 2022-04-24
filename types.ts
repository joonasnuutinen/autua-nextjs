export interface PageData {
  title: string
  content: string
}

export type PageComponent = (props: PageData) => JSX.Element
