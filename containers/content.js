import Fade from 'react-reveal/Fade'
import styles from '../styles/content.module.scss'

export default function Content() {
  return (
    <Fade bottom duration={2000}>
      <section className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHead}>
            <h2>Reconhecendo a depressão</h2>
            <h3>Aprenda a reconhecer os sintomas da depressão</h3>
          </div>
          <div className={styles.sectionBody}>
            <picture>
              <source srcSet='images/paciente-em-acompanhamento.webp' type='image/webp'/>
              <img src='images/paciente-em-acompanhamento.jpg' alt='Acompanhamento de paciente' loading='lazy'/>
            </picture>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida. Mauris ut porttitor justo, at fringilla urna. Morbi congue feugiat orci, ut rutrum turpis rhoncus eu. Phasellus ex quam, iaculis nec massa in, pretium interdum ante. Praesent mauris lectus, laoreet nec mollis vitae, semper a ipsum. Mauris at enim tortor. Sed quis purus id augue facilisis commodo blandit eget orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis mauris quis elementum. In tincidunt euismod cursus.</p>
            <ul>
              <li>Humor triste, ansioso ou “vazio” persistente</li>
              <li>Sentimentos de desesperança, luto ou pessimismo</li>
              <li>Sentimentos de culpa, inutilidade ou desamparo</li>
              <li>Perda de interesse ou prazer pela vida, hobbies e atividades</li>
              <li>Diminuição da energia ou fadiga</li>
              <li>Sentir-se inquieto ou ter problemas para ficar sentado</li>
              <li>Dificuldade de concentração, lembrança ou tomada de decisões</li>
              <li>Dificuldade para dormir, despertar de manhã cedo ou dormir demais</li>
            </ul>
          </div>
        </div>
      </section>
    </Fade>
  )
}