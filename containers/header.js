import ExternalLink from '../components/external-link'
import TwentyFourHours from '../components/24-hours'
import SendEmail from '../components/send-email'
import styles from '../styles/header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <a href='#contact-form'>
            <button>
              <SendEmail/>
              <span>contato@novonascer.com.br</span>
            </button>
          </a>
          <ExternalLink href='https://www.novonascer.com.br/'>
            <img src='images/novo-nascer-logo.svg' alt='Logo da Clínica Hospitalar Novo Nascer'/>
          </ExternalLink>
          <ExternalLink href='https://wa.me/5581973163700'>
            <button>
              <TwentyFourHours/>
              <span>(81) 973-163-700</span>
            </button>
          </ExternalLink>
        </div>
        <div className={styles.title}>
          <h1>Conheça o Tratamento para a Depressão da Novo Nascer</h1>
        </div>
      </div>
    </header>
  )
}