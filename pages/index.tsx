import type { NextPage } from 'next'
import Head from 'next/head'
import OurGoalsSection from '../Sections/HomeSections/OurGoalsSection'
import PartnersSection from '../Sections/HomeSections/PartnersSection'
import VentComplaintsSection from '../Sections/HomeSections/VentComplaintsSection'
import HeroSection from '../Sections/HomeSections/HeroSection'
import styles from '../styles/Home.module.css'
import Navbar from "../Components/NavBar" 
import PostaComplaint from "../Sections/HomeSections/PostaComplaint" 
import Complaints from "./complaints" 
import Testimonials from '../Sections/HomeSections/TestimonialsSection'
import Numbers from '../Sections/HomeSections/Numbers'
import Footer from '../Sections/Footer'
import HowDoesItWork from '../Sections/HomeSections/HowDoesItWork'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ecommerce Complaint</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </Head>
      <Navbar searchIconIsPresent={true}/>
      <HeroSection />
      <OurGoalsSection />
      <Numbers />
      <VentComplaintsSection />
      <HowDoesItWork/>
      <Testimonials />
      <PartnersSection />
      <PostaComplaint />
      <Footer />
    </div>
  )
}

export default Home
