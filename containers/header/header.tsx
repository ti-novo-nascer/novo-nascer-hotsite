import Fade from 'react-reveal/Fade'
import ExternalLink from '../../components/external-link'
import TwentyFourHours from '../../components/24-hours'
import SendEmail from '../../components/send-email'
import { formatPhone } from '../../utils/functions'
import styles from './header.module.scss'

export interface HeaderProps {
  phone: string
}

export default function Header({ phone }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Fade duration={2000}>
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
            <ExternalLink href={`https://wa.me/${phone}`}>
              <button>
                <TwentyFourHours/>
                <span>{formatPhone(phone)}</span>
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
