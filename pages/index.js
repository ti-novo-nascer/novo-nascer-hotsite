import Seo from '../containers/seo'
import Header from '../containers/header'
import Banner from '../containers/banner'
import Content from '../containers/content'
import ContactForm from '../containers/contact-form'
import Footer from '../containers/footer'

const pageData = {
  title: 'Como Tratar a Depressão | Novo Nascer',
  description: 'A Novo Nascer oferece a você um tratamento integral e humanizado para depressão'
}

export default function Home() {
  return (
    <>
      <Seo {...pageData}/>
      <Header/>
      <Banner/>
      <Content/>
      <ContactForm/>
      <Footer/>
    </>
  )
}