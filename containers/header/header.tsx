import Fade from 'react-reveal/Fade'
import ExternalLink from '../../components/external-link'
import TwentyFourHours from '../../components/24-hours'
import SendEmail from '../../components/send-email'
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Fade duration={4000}>
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <a href='#contact-form'>
              <button>
                <SendEmail/>
                <span>contato@novonascer.com.br</span>
              </button>
            </a>
            <ExternalLink href='https://www.novonascer.com.br/'>
              <img src='/novo-nascer-logo.svg' alt='Logo da Clínica Hospitalar Novo Nascer'/>
            </ExternalLink>
            <ExternalLink href='https://wa.me/5581973163700'>
              <button>
                <TwentyFourHours/>
                <span>(81) 97316-3700</span>
              </button>
            </ExternalLink>
          </div>
          <div className={styles.title}>
            <h1>Conheça o Tratamento para a Depressão da Novo Nascer</h1>
            <h2>Acredite na Superação</h2>
          </div>
          <div className={styles.credits}>
            <span>Direção Técnica: Psiquiatra Dr.<sup>a</sup> Daniela Morais | CRM: 16150 / RQE: 1795</span>
          </div>
        </div>
      </Fade>
    </header>
  )
}
