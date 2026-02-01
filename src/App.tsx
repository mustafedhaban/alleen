import React from 'react'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Strengths } from './components/Strengths'
import { Clients } from './components/Clients'
import { Contact } from './components/Contact'
import { FeaturesData } from './components/FeaturesData'
import BentoData from './components/BentoData'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'



export default function App() {
  return (
    <Layout>
      <Hero />


      <About />
      <Services />
      <BentoData />
       <Clients />
      <Testimonials />
      <Team />
      <Contact />
      {/* <FeaturesData />
      <Strengths /> */}
      
      
     

      
    </Layout>
  )
}
