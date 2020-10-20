import Fade from 'react-reveal/Fade'
import Carousel from 'react-bootstrap/Carousel'
import ExternalLink from '../../components/external-link'
import Prev from '../../components/prev'
import Next from '../../components/next'
import styles from './place.module.scss'

const slides = [
  { path: '/slide-1.webp', alt: 'Foto da Novo Nascer' },
  { path: '/slide-2.webp', alt: 'Foto da Novo Nascer' },
  { path: '/slide-3.webp', alt: 'Foto da Novo Nascer' },
  { path: '/slide-4.webp', alt: 'Foto da Novo Nascer' },
  { path: '/slide-5.webp', alt: 'Foto da Novo Nascer' },
  { path: '/slide-6.webp', alt: 'Foto da Novo Nascer' },
  { path: '/slide-7.webp', alt: 'Foto da Novo Nascer' }
]

export default function Place() {
  return (
    <Fade bottom duration={1000}>
      <div className={styles.place}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2>Onde tratamos</h2>
            <h3>Ambientes amplos, seguros e rodeados por natureza</h3>
          </div>
          <div className={styles.body}>
            <Carousel
              prevIcon={<Prev/>}
              nextIcon={<Next/>}
              indicators={false}
            >
              {slides.map(({ path, alt }, idx) => (
                <Carousel.Item key={idx} className={styles.carouselItem}>
                  <img src={path} alt={alt}/>
                </Carousel.Item>
              ))}
            </Carousel>
            <ExternalLink href='https://www.novonascer.com.br/hospitalidade'>
              <button>Ver Mais</button>
            </ExternalLink>
          </div>
        </div>
      </div>
    </Fade>
  )
}
