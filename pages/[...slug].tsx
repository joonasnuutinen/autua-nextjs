import { GetStaticPaths, GetStaticProps } from "next"
import parse from "../lib/parse"
import getPaths from "../lib/getPaths"
import Page from "../modules/Page"
import { PageComponent } from "../types"

const DynamicPage: PageComponent = (props) => {
  return Page(props)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string[] }
  const pageData = parse(`pages/${slug.join("/")}`)
  return {
    props: pageData
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPaths("pages")
  return {
    paths,
    fallback: false
  }
}

export default DynamicPage