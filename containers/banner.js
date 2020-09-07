import styles from '../styles/banner.module.scss'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <picture>
        <source media='(max-width: 960px)' srcSet='images/paciente-em-monitoramento.webp' type='image/webp'/>
        <source media='(max-width: 960px)' srcSet='images/paciente-em-monitoramento.jpg' type='image/jpeg'/>
        <source srcSet='images/pacientes-em-monitoramento.webp' type='image/webp'/>
        <img src='images/pacientes-em-monitoramento.jpg' alt='Pacientes em monitoramento' loading='lazy'/>
      </picture>
    </section>
  )
}