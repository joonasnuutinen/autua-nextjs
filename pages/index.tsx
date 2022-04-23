import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import parse from '../lib/parse'

const Home = ({ pageData }: { pageData: { title: string, content: string } }) => {
  const { title, content } = pageData

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await parse("pages/index")
  return {
    props: {
      pageData
    }
  }
}

export default Home
