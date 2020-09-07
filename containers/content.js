import styles from '../styles/content.module.scss'

export default function Content() {
  return (
    <section className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div>
            <h2>Sintomas da doença</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida. Mauris ut porttitor justo, at fringilla urna. Morbi congue feugiat orci, ut rutrum turpis rhoncus eu. Phasellus ex quam, iaculis nec massa in, pretium interdum ante. Praesent mauris lectus, laoreet nec mollis vitae, semper a ipsum. Mauris at enim tortor. Sed quis purus id augue facilisis commodo blandit eget orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis mauris quis elementum. In tincidunt euismod cursus.</p>
          </div>
          <picture>
            <source srcSet='images/paciente-em-acompanhamento.webp' type='image/webp'/>
            <img src='images/paciente-em-acompanhamento.webp' alt='Acompanhamento de paciente' loading='lazy'/>
          </picture>
        </div>
        <div className={styles.card}>
          <picture>
            <source srcSet='images/paciente-recuperada.webp' type='image/webp'/>
            <img src='images/paciente-recuperada.jpg' alt='Acompanhamento de paciente' loading='lazy'/>
          </picture>
          <div>
            <h2>Tratamento da doença</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida. Mauris ut porttitor justo, at fringilla urna. Morbi congue feugiat orci, ut rutrum turpis rhoncus eu. Phasellus ex quam, iaculis nec massa in, pretium interdum ante. Praesent mauris lectus, laoreet nec mollis vitae, semper a ipsum. Mauris at enim tortor. Sed quis purus id augue facilisis commodo blandit eget orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis mauris quis elementum. In tincidunt euismod cursus.</p>
          </div>
        </div>
      </div>
    </section>
  )
}