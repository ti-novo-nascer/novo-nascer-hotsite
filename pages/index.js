import { useState, useEffect } from 'react'
import Seo from '../containers/seo'
import Header from '../containers/header'
import FixedHeader from '../containers/fixed-header'
import Presentation from '../containers/presentation'
import CallToAction from '../containers/call-to-action'
import Content from '../containers/content'
import Motivational from '../containers/motivational'
import Statistics from '../containers/statistics'
import Service from '../containers/service'
import Testimonials from '../containers/testimonials'
import ContactForm from '../containers/contact-form'
import Footer from '../containers/footer'
import styles from '../styles/home.module.scss'

const pageData = {
  title: 'Tratamento para a Depressão da Novo Nascer',
  description: 'A Novo Nascer oferece a você um tratamento integral e humanizado para a depressão',
  url: 'http://localhost:3000/',
  image: 'http://localhost:3000/images/paciente-em-monitoramento.jpg'
}

export default function Home() {
  const [showFixedHeader, setShowFixedHeader] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 600 && showFixedHeader === false) {
          setShowFixedHeader(true)
        } else if (window.pageYOffset <= 600 && showFixedHeader === true) {
          setShowFixedHeader(false)
        }
      })
    }
  }, [showFixedHeader, setShowFixedHeader])
  return (
    <>
      <Seo {...pageData}/>
      <Header/>
      <FixedHeader className={styles.fixedHeader} show={showFixedHeader}/>
      <Presentation/>
      <CallToAction/>
      <Content/>
      <Motivational/>
      <Statistics/>
      <Service/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </>
  )
}