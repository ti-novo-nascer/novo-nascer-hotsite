import styles from '../styles/header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.rightMenu}>
          <a href='https://www.novonascer.com.br/' target='_blank'>
            <img className={styles.logo} src='logo.svg' alt='Logo da campanha do Setembro Amarelo da Novo Nascer'/>
          </a>
        </div>
        <div className={styles.leftMenu}>
          <a href='https://wa.me/5581973163700' target='_blank'>
            <button>
              <img src='images/whatsapp-icon.svg' alt='Ícone do WhatsApp'/>
              <span>Fale conosco</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  )
}