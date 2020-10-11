import Fade from 'react-reveal/Fade'
import ExternalLink from '../components/external-link'
import styles from '../styles/motivational.module.scss'

export default function Motivational() {
  return (
    <div className={styles.motivational}>
      <Fade duration={4000}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHead}>
            <h2>Você não está sozinho!</h2>
          </div>
          <div className={styles.sectionBody}>
            <ExternalLink href='https://wa.me/5581973163700'>
              <button>
                <span>Peça ajuda agora!</span>
              </button>
            </ExternalLink>
          </div>
        </div>
      </Fade>
    </div>
  )
}