import { AppProps } from 'next/app'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const pageMetadata = {
  title: 'Tratamento para a Depressão da Novo Nascer',
  site: 'Clínica Hospitalar Novo Nascer',
  description: 'A Novo Nascer oferece a você um tratamento integral e humanizado para a depressão',
  url: 'http://localhost:3000/',
  image: {
    src: 'http://localhost:3000/logo.webp',
    alt: 'Logo da Novo Nascer'
  },
  lang: 'pt-BR'
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component pageMetadata={pageMetadata} {...pageProps}/>
}

export default MyApp
