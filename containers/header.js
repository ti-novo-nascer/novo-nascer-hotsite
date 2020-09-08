import ExternalLink from '../components/external-link'
import Email from '../components/email'
import WhatsApp from '../components/whatsapp'
import styles from '../styles/header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.leftMenu}>
          <ExternalLink href='https://www.novonascer.com.br/'>
            <img
              className={styles.logo}
              src='logo.svg'
              alt='Campanha do Setembro Amarelo da Clínica Hospitalar Novo Nascer'
            />
          </ExternalLink>
        </div>
        <div className={styles.rightMenu}>
          <ExternalLink href='mailto:contato@novonascer.com.br'>
            <button>
              <Email/>
              <span>contato@novonascer.com.br</span>
            </button>
          </ExternalLink>
          <ExternalLink href='https://wa.me/5581973163700'>
            <button>
              <WhatsApp/>
              <span>(81) 973-163-700</span>
            </button>
          </ExternalLink>
        </div>
      </div>
    </header>
  )
}