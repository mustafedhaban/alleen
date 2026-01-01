import React from 'react'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Sectors } from './components/Sectors'
import { Approach } from './components/Approach'
import { Strengths } from './components/Strengths'
import { Clients } from './components/Clients'
import { Contact } from './components/Contact'
import { FeaturesData } from './components/FeaturesData'
import BentoData from './components/BentoData'



export default function App() {
  return (
    <Layout>
      <Hero />
      
      
      <About />
      <Services />
      {/* <Sectors /> */}
      <BentoData/>
      {/* <Approach /> */}
      <FeaturesData />
      <Strengths />
      <Clients />
      <Contact />
    </Layout>
  )
}
