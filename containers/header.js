import WhatsApp from '../components/whatsapp'
import styles from '../styles/header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.leftMenu}>
          <a href='https://www.novonascer.com.br/' target='_blank'>
            <img className={styles.logo} src='logo.svg' alt='Campanha do Setembro Amarelo da Clínica Hospitalar Novo Nascer'/>
          </a>
        </div>
        <div className={styles.rightMenu}>
          <a href='https://wa.me/5581973163700' target='_blank'>
            <button>
              <WhatsApp width={24} height={24} hexColor={'#FFFFFF'}/>
              <span>Fale conosco</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  )
}