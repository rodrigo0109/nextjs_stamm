import Head from 'next/head'
import * as React from 'react'
import Navbar from '../Navbar'

type Props = {
    children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
        <Head>
            <title>Home Stamm</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main>
            { children }
        </main>
    </div>
  )
}

export default Layout