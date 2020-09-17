import Carousel from 'react-bootstrap/Carousel'
import ExternalLink from '../components/external-link'
import Prev from '../components/prev'
import Next from '../components/next'
import styles from '../styles/testimonials.module.scss'

const testimonials = [
  { author: 'Autor um', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida. Mauris ut porttitor justo, at fringilla urna. Morbi congue feugiat orci, ut rutrum turpis rhoncus eu. Phasellus ex quam, iaculis nec massa in, pretium interdum ante. Praesent mauris lectus, laoreet nec mollis vitae, semper a ipsum. Mauris at enim tortor. Sed quis purus id augue facilisis commodo blandit eget orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis mauris quis elementum. In tincidunt euismod cursus."' },
  { author: 'Autor dois', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida. Mauris ut porttitor justo, at fringilla urna. Morbi congue feugiat orci, ut rutrum turpis rhoncus eu. Phasellus ex quam, iaculis nec massa in, pretium interdum ante. Praesent mauris lectus, laoreet nec mollis vitae, semper a ipsum. Mauris at enim tortor. Sed quis purus id augue facilisis commodo blandit eget orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis mauris quis elementum. In tincidunt euismod cursus."' },
  { author: 'Autor três', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida. Mauris ut porttitor justo, at fringilla urna. Morbi congue feugiat orci, ut rutrum turpis rhoncus eu. Phasellus ex quam, iaculis nec massa in, pretium interdum ante. Praesent mauris lectus, laoreet nec mollis vitae, semper a ipsum. Mauris at enim tortor. Sed quis purus id augue facilisis commodo blandit eget orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis mauris quis elementum. In tincidunt euismod cursus."' },
  { author: 'Autor quatro', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida. Mauris ut porttitor justo, at fringilla urna. Morbi congue feugiat orci, ut rutrum turpis rhoncus eu. Phasellus ex quam, iaculis nec massa in, pretium interdum ante. Praesent mauris lectus, laoreet nec mollis vitae, semper a ipsum. Mauris at enim tortor. Sed quis purus id augue facilisis commodo blandit eget orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis mauris quis elementum. In tincidunt euismod cursus."' },
  { author: 'Autor cinco', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida. Mauris ut porttitor justo, at fringilla urna. Morbi congue feugiat orci, ut rutrum turpis rhoncus eu. Phasellus ex quam, iaculis nec massa in, pretium interdum ante. Praesent mauris lectus, laoreet nec mollis vitae, semper a ipsum. Mauris at enim tortor. Sed quis purus id augue facilisis commodo blandit eget orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis mauris quis elementum. In tincidunt euismod cursus."' },
  { author: 'Autor seis', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida. Mauris ut porttitor justo, at fringilla urna. Morbi congue feugiat orci, ut rutrum turpis rhoncus eu. Phasellus ex quam, iaculis nec massa in, pretium interdum ante. Praesent mauris lectus, laoreet nec mollis vitae, semper a ipsum. Mauris at enim tortor. Sed quis purus id augue facilisis commodo blandit eget orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis mauris quis elementum. In tincidunt euismod cursus."' }
]

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.wrapper}>
        <div className={styles.sectionHead}>
          <h2>Depoimentos</h2>
          <h3>A vivência de nossos clientes e familiares</h3>
        </div>
        <div className={styles.sectionBody}>
          <Carousel
            className={styles.sectionBody}
            prevIcon={<Prev/>}
            nextIcon={<Next/>}
            indicators={false}
          >
            {testimonials.map(({ author, text }, idx) => {
              return (
                <Carousel.Item key={idx} className={styles.carouselItem}>
                  <p>{text}</p>
                  <span>{author}</span>
                </Carousel.Item>
              )
            })}
          </Carousel>
          <ExternalLink href='https://www.novonascer.com.br/lista-de-depoimentos'>
            <button>Ver Mais</button>
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}