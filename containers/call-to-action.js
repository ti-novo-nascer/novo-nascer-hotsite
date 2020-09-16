import ExternalLink from '../components/external-link'
import styles from '../styles/call-to-action.module.scss'

export default function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <div className={styles.wrapper}>
        <div className={styles.sectionHead}>
          <h2>Está precisando de ajuda?</h2>
          <h3>Estamos preparados para receber quem quer que esteja precisando de ajuda</h3>
        </div>
        <div className={styles.sectionBody}>
          <ExternalLink href='https://wa.me/5581973163700'>
            <button>
              <span>Vamos conversar</span>
            </button>
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}