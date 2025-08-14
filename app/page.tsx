'use client'

import { Footer, Header, Table } from '@/components'
import { HomePage } from '@/Home.styled'

export default function Home() {
  return (
    <>
      <Header />
      <HomePage>
        <Table />
      </HomePage>
      <Footer />
    </>
  )
}