import type { GetStaticProps } from 'next'
import Head from 'next/head'
import getPageData from '../lib/getPageData'
import parse from '../lib/parse'
import Page from '../modules/Page'
import { PageComponent } from '../types'

const Home: PageComponent = (props) => {
  return Page(props)
}

export const getStaticProps: GetStaticProps = async () => {
  const pageData = getPageData("index")
  return {
    props: pageData
  }
}

export default Home
