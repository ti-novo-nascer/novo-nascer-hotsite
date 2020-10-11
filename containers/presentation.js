import Fade from 'react-reveal/Fade'
import styles from '../styles/presentation.module.scss'

export default function Presentation() {
  return (
    <Fade bottom duration={2000}>
      <div className={styles.presentation}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHead}>
            <h2>Bem-vindo à Novo Nascer!</h2>
            <h3>Estamos preparados para cuidar de você em nossas instalações</h3>
          </div>
          <div className={styles.sectionBody}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida. Mauris ut porttitor justo, at fringilla urna. Morbi congue feugiat orci, ut rutrum turpis rhoncus eu. Phasellus ex quam, iaculis nec massa in, pretium interdum ante. Praesent mauris lectus, laoreet nec mollis vitae, semper a ipsum. Mauris at enim tortor. Sed quis purus id augue facilisis commodo blandit eget orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis mauris quis elementum. In tincidunt euismod cursus.</p>
            <p>In sit amet magna ac purus luctus lacinia. Donec elementum volutpat eros a aliquet. Curabitur in tellus justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam at aliquam augue. Nam magna magna, bibendum at lacus ac, blandit egestas erat. Nulla tempor, augue et pretium molestie, leo leo congue nulla, sed feugiat massa turpis non nisl.</p>
          </div>
        </div>
      </div>
    </Fade>
  )
}