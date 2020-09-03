import styles from '../styles/content.module.scss'

export default function Content() {
  return (
    <section className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div>
            <h2>Sintomas da depressão</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida. Mauris ut porttitor justo, at fringilla urna. Morbi congue feugiat orci, ut rutrum turpis rhoncus eu. Phasellus ex quam, iaculis nec massa in, pretium interdum ante. Praesent mauris lectus, laoreet nec mollis vitae, semper a ipsum. Mauris at enim tortor. Sed quis purus id augue facilisis commodo blandit eget orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis mauris quis elementum. In tincidunt euismod cursus.</p>
          </div>
          <img src='images/pessoa-com-depressao.jpg' alt='Pessoa com depressão'/>
        </div>
        <div className={styles.card}>
          <img src='images/pessoa-feliz.jpg' alt='Pessoa feliz'/>
          <div>
            <h2>Tratamento da depressão</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida. Mauris ut porttitor justo, at fringilla urna. Morbi congue feugiat orci, ut rutrum turpis rhoncus eu. Phasellus ex quam, iaculis nec massa in, pretium interdum ante. Praesent mauris lectus, laoreet nec mollis vitae, semper a ipsum. Mauris at enim tortor. Sed quis purus id augue facilisis commodo blandit eget orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis mauris quis elementum. In tincidunt euismod cursus.</p>
          </div>
        </div>
      </div>
    </section>
  )
}