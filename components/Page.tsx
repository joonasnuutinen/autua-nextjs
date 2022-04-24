import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"
import { PageComponent } from "../types"

const Page: PageComponent = ({ title, content, header, footer }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {Header(header)}
      <main>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
      {Footer(footer)}
    </div>
  )
}

export default Page