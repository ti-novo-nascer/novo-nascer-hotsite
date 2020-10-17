import Fade from 'react-reveal/Fade'
import styles from './presentation.module.scss'

export default function Presentation() {
  return (
    <Fade bottom duration={2000}>
      <div className={styles.presentation}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2>Bem-vindo à Novo Nascer!</h2>
            <h3>Estamos preparados para cuidar de você em nossas instalações</h3>
          </div>
          <div className={styles.body}>
            <p>Há momentos da vida que são cruciais, que nos pedem uma nova direção. Você sabe que precisa mudar, encontrar equilíbrio, sentir-se finalmente em paz. Viver de forma completa e ter um senso de propósito para que tudo faça sentido torna-se essencial.</p>
            <p>A Novo Nascer é o lugar para pessoas que precisam fazer essa mudança da melhor forma possível. Oferecemos cuidados multiprofissionais, orientação precisa e um caloroso acolhimento, caminhando com você nessa jornada de transformações necessárias.</p>
          </div>
        </div>
      </div>
    </Fade>
  )
}
