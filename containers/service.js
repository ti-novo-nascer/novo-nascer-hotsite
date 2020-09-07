import Medicine from '../components/medicine'
import AirConditioner from '../components/air-conditioner'
import Apple from '../components/apple'
import Stethoscope from '../components/stethoscope'
import Group from '../components/group'
import Ambulance from '../components/ambulance'
import styles from '../styles/service.module.scss'

export default function Service() {
  return (
    <section className={styles.service}>
      <div className={styles.wrapper}>
        <div className={styles.sectionHead}>
          <h2>O que oferecemos</h2>
          <h3>Não medimos esforços para garantir uma recuperação efetiva</h3>
        </div>
        <div className={styles.sectionBody}>
          <ul>
            <li>
              <Medicine width={128} height={128} fill={'#A09678'}/>
              <div>
                <h4>Exames e medicamentos de última geração</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida.</p>
              </div>
            </li>
            <li>
              <AirConditioner width={128} height={128} fill={'#A09678'}/>
              <div>
                <h4>Suítes climatizadas</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida.</p>
              </div>
            </li>
            <li>
              <Apple width={128} height={128} fill={'#A09678'}/>
              <div>
                <h4>Receitas saudáveis e saborosas</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida.</p>
              </div>
            </li>
            <li>
              <Stethoscope width={128} height={128} fill={'#A09678'}/>
              <div>
                <h4>Cuidados intensivos de enfermagem</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida.</p>
              </div>
            </li>
            <li>
              <Group width={128} height={128} fill={'#A09678'}/>
              <div>
                <h4>Grupos terapêuticos</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida.</p>
              </div>
            </li>
            <li>
              <Ambulance width={128} height={128} fill={'#A09678'}/>
              <div>
                <h4>Equipagem hospitalar</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum dui id fermentum gravida.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}