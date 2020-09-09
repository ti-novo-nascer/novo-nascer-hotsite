import QuotationMark from '../components/quotation-mark'
import styles from '../styles/quote.module.scss'

export default function Quote() {
  return (
    <section className={styles.quote}>
      <div className={styles.wrapper}>
        <div className={styles.sectionBody}>
          <picture>
            <source srcSet='images/carlos-oliveira-fundador-novo-nascer.webp' type='image/webp'/>
            <img src='images/carlos-oliveira-fundador-novo-nascer.jpg' alt='Carlos F. Lopes de Oliveira, fundador da Clínica Hospitalar Novo Nascer' loading='lazy'/>
          </picture>
          <blockquote cite='https://www.novonascer.com.br/quem-somos'>
            <QuotationMark/>
            <p>Somos profundamente comprometidos com o tratamento planejado exclusivamente para cada residente. Não é por acaso que nosso lema é: respire bem-estar!</p>
            <footer>&#8213; Carlos F. Lopes de Oliveira, nosso fundador</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}