import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Serp, OpenGraph, TwitterCard } from '../containers/seo'
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

const pageMetadata = {
  title: 'Tratamento para a Depressão da Novo Nascer',
  site: 'Clínica Hospitalar Novo Nascer',
  description: 'A Novo Nascer oferece a você um tratamento integral e humanizado para a depressão',
  url: 'http://localhost:3000/',
  image: 'http://localhost:3000/logo.webp',
  imageAlt: 'Logo da Novo Nascer'
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
      <Head>
        <meta name='author' content='Lucas Alves Costa'/>
        <Serp
          title={pageMetadata.title}
          description={pageMetadata.description}
          url={pageMetadata.url}
          isCanonical={true}
        />
        <OpenGraph
          title={pageMetadata.title}
          type='website'
          image={pageMetadata.image}
          url={pageMetadata.url}
        />
        <TwitterCard
          title={pageMetadata.title}
          site={pageMetadata.site}
          description={pageMetadata.description}
          image={pageMetadata.image}
          imageAlt={pageMetadata.imageAlt}
        />
      </Head>
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