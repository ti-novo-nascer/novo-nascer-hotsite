import Fade from 'react-reveal/Fade'
import styles from './statistics.module.scss'

export default function Statistics() {
  return (
    <Fade bottom duration={2000}>
      <div className={styles.statistics}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2>Depressão em números</h2>
            <h3>Os números mostram a proporção da depressão no mundo</h3>
          </div>
          <div className={styles.body}>
            <img src='/depressao-estatistica.webp' alt='Dados sobre a depressão' loading='lazy'/>
          </div>
        </div>
      </div>
    </Fade>
  )
}
