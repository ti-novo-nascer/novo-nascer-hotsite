import WhatsApp from '../components/whatsapp'
import Instagram from '../components/instagram'
import Youtube from '../components/youtube'
import Facebook from '../components/facebook'
import Phone from '../components/phone'
import Email from '../components/email'
import Localization from '../components/localization'
import styles from '../styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <a href='https://wa.me/5581973163700' target='_blank'>
                <WhatsApp width={24} height={24} fill={'#A09678'}/>
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/novonascer' target='_blank'>
                <Instagram width={24} height={24} fill={'#A09678'}/>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/user/novonascer' target='_blank'>
                <Youtube width={24} height={24} fill={'#A09678'}/>
                <span>Youtube</span>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/novonascer' target='_blank'>
                <Facebook width={24} height={24} fill={'#A09678'}/>
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.list}>
          <h3>Contatos</h3>
          <ul>
            <li>
              <a href='tel:5581973163700' target='_blank'>
                <Phone width={24} height={24} fill={'#A09678'}/>
                <span>Telefone</span>
              </a>
            </li>
            <li>
              <a href='mailto:contato@novonascer.com.br' target='_blank'>
                <Email width={24} height={24} fill={'#A09678'}/>
                <span>Email</span>
              </a>
            </li>
            <li>
              <a href='https://g.page/r/CcVktdl66f64EAE' target='_blank'>
                <Localization width={24} height={24} fill={'#A09678'}/>
                <span>Localização</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}