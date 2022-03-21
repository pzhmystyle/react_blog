import Head from 'next/head'
import Header from '../components/Header'
import React from 'react'

import Footer from '../components/Footer'
import List from './list'

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
     <Header/>
     <List />
     <Footer />
    </div>
  )
}

export default Home