import Fade from 'react-reveal/Fade'
import Carousel from 'react-bootstrap/Carousel'
import ExternalLink from '../../components/external-link'
import Prev from '../../components/prev'
import Next from '../../components/next'
import styles from './testimonials.module.scss'

const testimonials = [
  {
    author: 'Funcionária pública, esposa de paciente',
    text: '"Eu me senti desamparada durante muito tempo. Os médicos me pediam pra ficar afastada dele, eu e meus filhos, mas não tinha como. Vivia sob constante ameaça de violência. Uma vez ele mas expulsou de casa com os meninos e tudo e fui pra casa da minha sogra, mas daí ele foi lá também me ameaçar e eu não tinha outro lugar pra ir. Foi muito sofrimento mesmo, doença mental não é brincadeira, não sabia o que..."'
  },
  {
    author: 'Empresaria, irmã de nossa residente, com cinco meses de internação',
    text: '"Minha irmã mesmo procurou a Clínica e resolveu se internar. Ela tá aqui para tratar alcoolismo e depressão. Acho que a depressão levou ela pras drogas. Ela sempre foi uma pessoa muito querida mas quando usava se tornava uma outra pessoa, não dava nem pra falar com ela. Dizia que ia comprar pão e voltava dois, três dias depois. Daí ficava trancada no quarto com ressaca moral. É a primeira e última..."'
  },
  {
    author: 'Recepcionista hoteleiro, filho de nosso residente',
    text: '"Meu pai sofre de alcoolismo e chegou aqui muito debilitado. Estava com cuidadores e um psiquiatra que o acompanhava quando o médico mesmo disse que ele precisava de uma internação. Daí fomos atrás de um lugar. Minha mãe ouviu falar daqui e daí trouxemos. Antes visitamos algumas clínicas, mas quando chegamos e vimos o espaço e conhecemos o programa, nós nos sentimos bem em deixá-lo aqui. Estamos..."'
  },
  {
    author: 'Pai da residente, engenheiro eletricista',
    text: '"Estou muito surpreso positivamente. A primeira internação foi horrível e eu não tive coragem de deixar minha filha internada nem um dia inteiro. Em outra ocasião deixamos ela por uma semana e tiramos porque era muito ruim mesmo. Pelo intermédio do plano de saúde, que me indicou a Novo Nascer, entrei em contato, explicaram tudo e me chamaram pra conhecer a Clínica. Mas nem deu tempo. A situação de..."'
  },
  {
    author: 'Artista plástico, 32 anos, aos dois meses de internação',
    text: '"A minha internação foi involuntária mas aceitei bem logo de cara porque sei que precisava. Perdi muitas oportunidades por causa da droga. De noiva à bolsa de estudos nos Estados Unidos. Meu pai, médico, já não sabia mais o que fazer comigo. Depois começaram as internações, aqui é minha primeira vez. Aqui finalmente descobriram o que tenho de fato e agora o tratamento está bem certinho. Estou aprendendo o..."'
  },
  {
    author: 'Estudante de jornalismo, 26 anos, aos quatro meses de internação',
    text: '"O meu encontro com a sobriedade tem sido muito bom. Costumo a dizer uma frase que é \'Tem perdas que são ganhos e tem ganhos que são perdas\'. Perdi o convívio com famílias e pessoas queridas por um tempo, mas ganhei a minha vida. Se não tivesse vindo pra Novo Nascer estaria vendendo drogas na melhor das hipóteses. Vim porque minha família me trouxe, ainda bem."'
  }
]

export default function Testimonials() {
  return (
    <Fade bottom duration={2000}>
      <div className={styles.testimonials}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2>Depoimentos</h2>
            <h3>A vivência de nossos clientes e familiares</h3>
          </div>
          <div className={styles.body}>
            <Carousel
              prevIcon={<Prev/>}
              nextIcon={<Next/>}
              indicators={false}
            >
              {testimonials.map(({ author, text }, idx) => (
                <Carousel.Item key={idx} className={styles.carouselItem}>
                  <p>{text}</p>
                  <span>{author}</span>
                </Carousel.Item>
              ))}
            </Carousel>
            <ExternalLink href='https://www.novonascer.com.br/lista-de-depoimentos'>
              <button>Ver Mais</button>
            </ExternalLink>
          </div>
        </div>
      </div>
    </Fade>
  )
}
