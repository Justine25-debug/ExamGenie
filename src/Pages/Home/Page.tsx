import { Feature2 } from '@/components/features'
import { Footer2 } from '@/components/footer2'
import { Hero } from '@/components/hero'
import { Header1 } from '@/components/ui/navbar'
import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Header1 />
    <main className="flex-grow">
    <Hero />
    <Feature2 />
    </main>
    <Footer2 />
  </div>
  )
}

export default Home
