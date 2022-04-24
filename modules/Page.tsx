import Head from "next/head"
import Footer from "./Footer"
import { PageComponent } from "../types"

const Page: PageComponent = ({ title, content, footer }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
      {Footer(footer)}
    </div>
  )
}

export default Page