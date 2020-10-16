import Fade from 'react-reveal/Fade'
import styles from '../styles/content.module.scss'

export default function Content() {
  return (
    <Fade bottom duration={2000}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHead}>
            <h2>Reconhecendo a depressão</h2>
            <h3>Aprenda a reconhecer os sintomas da depressão</h3>
          </div>
          <div className={styles.sectionBody}>
            <img src='images/paciente-em-acompanhamento.webp' alt='Acompanhamento de paciente' loading='lazy'/>
            <div className={styles.text}>
              <p>O termo depressão vem sendo utilizado para uma grande variedade de questões, como tristeza, reações a certas circunstâncias da vida e até a outros distúrbios emocionais. A depressão de fato, porém, é um transtorno afetivo que envolve alterações nos neurotransmissores cerebrais e se apresenta com rebaixamento do humor, redução de energia e prejuízo de atividades em geral.</p>
              <p>Depressão e tristeza têm características distintas. A tristeza é um sentimento universal, natural e fisiológico que expressa dor ou sofrimento e, ao contrário da depressão, não compromete significativamente outras funções mentais nem o funcionamento global do indivíduo.</p>
              <p>Como qualquer transtorno emocional, a depressão pode afetar qualquer pessoa, independentemente de sua conta bancária, situação de poder ou fama. Quantas pessoas aparentam viver em um estado de felicidade na superfície, quando na verdade sentem constantemente sofrimento profundo, vazio, solidão?</p>
              <p>A depressão atinge duas vezes mais mulheres do que homens e pode ser classificada em graus: leve, moderado e grave. Deve ser tratado adequadamente e o quanto mais cedo possível e o entendimento alheio de ser "uma besteira", "falta do que fazer" ou que palavras como "vamos animar que passa" ou "pense positivo" apenas afastam mais ainda a pessoa, que precisa de ajuda efetiva.</p>
              <p>A internação em casos de depressão ocorre quando o paciente já está em tratamento no consultório e o resultado não aparece. Tentativa de suicídio, incapacidade de levantar da cama, de trabalhar e até mesmo de tomar qualquer tipo de medicação são outros indicativos de que a internação deve ser feita o quanto antes.</p>
              <p>Com a internação, o paciente alcança a estabilização do quadro. Essa conquista resguarda-o de tentativas de suicídio ou de improdutividade, quadro que esse comum em pacientes que não procuram tratamento ou com tratamento inadequado para gravidade de sua situação.</p>
              <p>Alguns sintomas da depressão são:</p>
              <ul>
                <li>Desânimo e choro</li>
                <li>Sensação persistente de tristeza, angústia e/ou vazio</li>
                <li>Perda de capacidade de sentir prazer</li>
                <li>Baixa autoestima</li>
                <li>Plano ou tentativa de suicídio</li>
                <li>Pensamentos sobre morte ou suicídio</li>
                <li>Diminuição da libido</li>
                <li>Insegurança, medos e indecisões</li>
                <li>Inquietação, ansiedade ou irritabilidade</li>
                <li>Falta de sentido na vida</li>
                <li>Dores crônicas ou sintomas físicos difusos e persistentes</li>
                <li>Insônia ou sonolência excessiva</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}