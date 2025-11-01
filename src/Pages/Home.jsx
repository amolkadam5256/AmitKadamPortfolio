import React from 'react'
import ProfessionalHero from '../components/HomeSetions/ProfessionalHero'
import AboutPreview from '../components/HomeSetions/AboutPreview'
import ServicesSnapshot from '../components/HomeSetions/ServicesSnapshot'
import ProfessionalTestimonials from '../components/HomeSetions/ProfessionalTestimonials'
import ContactCTA from '../components/HomeSetions/ContactCTA'

const Home = () => {
  return (
    <>
      <ProfessionalHero />
      <AboutPreview />
      <ServicesSnapshot />
      <ProfessionalTestimonials/>
      <ContactCTA/>
    </>
  )
}

export default Home