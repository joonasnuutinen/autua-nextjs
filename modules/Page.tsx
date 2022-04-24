import Head from "next/head"
import { PageComponent } from "../types"

const Page: PageComponent = ({ title, content }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default Page