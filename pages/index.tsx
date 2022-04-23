import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import parse from '../lib/parse'

const Home = ({ pageData }: { pageData: { title: string, content: string } }) => {
  console.log(pageData)
  return (
    <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
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
