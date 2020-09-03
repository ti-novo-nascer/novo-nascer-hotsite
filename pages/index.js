import Seo from '../containers/seo'
import Header from '../containers/header'
import Slider from '../containers/slider'
import ContactForm from '../containers/contact-form'
import Footer from '../containers/footer'

const pageData = {
  title: 'Setembro Amarelo | Novo Nascer',
  description: 'A Novo Nascer oferece a você um tratamento integral e humanizado para depressão'
}

export default function Home() {
  return (
    <>
      <Seo {...pageData}/>
      <Header/>
      <Slider/>
      <ContactForm/>
      <Footer/>
    </>
  )
}