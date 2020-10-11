import Fade from 'react-reveal/Fade'
import styles from '../styles/statistics.module.scss'

export default function Statistics() {
  return (
    <Fade bottom duration={2000}>
      <div className={styles.statistics}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHead}>
            <h2>Depressão em números</h2>
            <h3>Os números mostram a proporção da depressão no mundo</h3>
          </div>
          <div className={styles.sectionBody}>
            <img src='images/depressao-estatistica.webp' alt='Dados sobre a depressão' loading='lazy'/>
          </div>
        </div>
      </div>
    </Fade>
  )
}