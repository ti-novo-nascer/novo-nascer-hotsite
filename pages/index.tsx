import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import Seo from '../containers/seo'
import Header from '../containers/header'
import FixedHeader from '../containers/fixed-header'
import Presentation from '../containers/presentation'
import CallToAction from '../containers/call-to-action'
import Content from '../containers/content'
import Motivational from '../containers/motivational'
import Place from '../containers/place'
import Statistics from '../containers/statistics'
import Service from '../containers/service'
import Testimonials from '../containers/testimonials'
import ContactForm from '../containers/contact-form'
import Footer from '../containers/footer'
import { getPageMetadata, getPageContent } from '../utils/sanity'
import styles from '../styles/home.module.scss'

export default function Home({ pageMetadata, pageContent }) {
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
      <Seo {...pageMetadata}/>
      <Header
        email={pageMetadata.email}
        phone={pageMetadata.phone}
        {...pageContent.header}
      />
      <FixedHeader
        className={styles.fixedHeader}
        show={showFixedHeader}
        email={pageMetadata.email}
        phone={pageMetadata.phone}
      />
      <Presentation {...pageContent.presentation}/>
      <CallToAction/>
      <Content/>
      <Motivational/>
      <Place/>
      <Statistics/>
      <Service/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pageMetadata = await getPageMetadata()
  const pageContent = await getPageContent()
  return {
    props: {
      pageMetadata,
      pageContent
    }
  }
}
