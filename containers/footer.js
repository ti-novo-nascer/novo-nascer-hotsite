import WhatsApp from '../components/whatsapp'
import Instagram from '../components/instagram'
import Youtube from '../components/youtube'
import Facebook from '../components/facebook'
import styles from '../styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a href='https://wa.me/5581973163700' target='_blank'>
            <WhatsApp width={24} height={24} hexColor={'#A09678'}/>
            <span>WhatsApp</span>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/novonascer' target='_blank'>
            <Instagram width={24} height={24} hexColor={'#A09678'}/>
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/user/novonascer' target='_blank'>
            <Youtube width={24} height={24} hexColor={'#A09678'}/>
            <span>Youtube</span>
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/novonascer' target='_blank'>
            <Facebook width={24} height={24} hexColor={'#A09678'}/>
            <span>Facebook</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}