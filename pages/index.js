import Seo from '../containers/seo'
import Header from '../containers/header'
import Presentation from '../containers/presentation'
import Quote from '../containers/quote'
import Content from '../containers/content'
import Service from '../containers/service'
import Testimonials from '../containers/testimonials'
import ContactForm from '../containers/contact-form'
import Footer from '../containers/footer'

const pageData = {
  title: 'Tratamento para a Depressão da Novo Nascer',
  description: 'A Novo Nascer oferece a você um tratamento integral e humanizado para a depressão',
  url: 'http://localhost:3000/',
  image: 'http://localhost:3000/images/paciente-em-monitoramento.jpg'
}

export default function Home() {
  return (
    <>
      <Seo {...pageData}/>
      <Header/>
      <Presentation/>
      <Quote/>
      <Content/>
      <Service/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </>
  )
}