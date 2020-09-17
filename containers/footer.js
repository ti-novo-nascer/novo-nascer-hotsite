import ExternalLink from '../components/external-link'
import Logo from '../components/logo'
import WhatsApp from '../components/whatsapp'
import Instagram from '../components/instagram'
import Youtube from '../components/youtube'
import Facebook from '../components/facebook'
import styles from '../styles/footer.module.scss'

const baseUrl = 'https://www.novonascer.com.br'

const socialMedias = [
  { title: 'WhatsApp', link: 'https://wa.me/5581973163700', icon: WhatsApp },
  { title: 'Instagram', link: 'https://www.instagram.com/novonascer', icon: Instagram },
  { title: 'Youtube', link: 'https://www.youtube.com/user/novonascer', icon: Youtube },
  { title: 'Facebook', link: 'https://www.facebook.com/novonascer', icon: Facebook }
]

const addictionTreatments = [
  { title: 'Tabagismo', path: 'tabagismo' },
  { title: 'Sexo', path: 'sexo' },
  { title: 'Vigorexia', path: 'vigorexia' },
  { title: 'Compras', path: 'compras' },
  { title: 'Internet', path: 'internet' },
  { title: 'Jogo', path: 'jogo' },
  { title: 'MDMA', path: 'mdma' },
  { title: 'LSD', path: 'lsd' },
  { title: 'Múltiplas Drogas', path: 'multiplas-drogas' },
  { title: 'Medicamentos', path: 'medicamentos' },
  { title: 'Maconha', path: 'maconha' },
  { title: 'Crack', path: 'crack' },
  { title: 'Cocaína', path: 'cocaina' },
  { title: 'Alcoolismo', path: 'alcoolismo' }
]

const psychiatryTreatments = [
  { title: 'Ciúme Patológico', path: 'ciume-patologico' },
  { title: 'Bulimia Nervosa', path: 'bulimia-nervosa' },
  { title: 'Anorexia Nervosa', path: 'anorexia-nervosa' },
  { title: 'Esquizofrenia', path: 'esquizofrenia' },
  { title: 'Depressão', path: 'depressao' },
  { title: 'Burnout', path: 'burnout' },
  { title: 'Borderline', path: 'borderline' },
  { title: 'Bipolaridade', path: 'bipolaridade' },
  { title: 'Comportamento Suicida', path: 'comportamento-suicida' }
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.brand}>
          <ExternalLink href='https://g.page/r/CcVktdl66f64EBA'>
            <Logo/>
            <span>R. Cristine Albert, 752,<br/>Camaragibe-PE</span>
          </ExternalLink>
        </div>
        <div className={styles.list}>
          <h3>Redes Sociais</h3>
          <ul>
            {socialMedias.map(({ title, link, icon: Icon}) => {
              return (
                <li key={title}>
                  <ExternalLink href={link}>
                    <Icon/>
                    <span>{title}</span>
                  </ExternalLink>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.list}>
          <h3>Tratamentos de Depedências</h3>
          <ul>
            {addictionTreatments.map(({ title, path }) => {
              return (
                <li key={title}>
                  <ExternalLink href={`${baseUrl}/oque-tratamos/${path}`}>
                    <span>{title}</span>
                  </ExternalLink>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.list}>
          <h3>Tratamentos de Psiquiatria</h3>
          <ul>
            {psychiatryTreatments.map(({ title, path }) => {
              return (
                <li key={title}>
                  <ExternalLink href={`${baseUrl}/oque-tratamos/${path}`}>
                    <span>{title}</span>
                  </ExternalLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}