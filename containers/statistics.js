import { ResponsiveBar } from '@nivo/bar'
import styles from '../styles/statistics.module.scss'

const data = [
  {
    'disease': 'Depressão',
    'value': 13
  },
  {
    'disease': 'Alcoolismo',
    'value': 7.1
  },
  {
    'disease': 'Esquizofrenia',
    'value': 4
  },
  {
    'disease': 'Bipolaridade',
    'value': 3.3
  },
  {
    'disease': 'TOC',
    'value': 2.8
  }
]

export default function Statistics() {
  return (
    <section className={styles.statistics}>
      <div className={styles.wrapper}>
        <div className={styles.sectionHead}>
          <h2>Estatísticas da depressão</h2>
          <h3>Das 10 principais causas de incapacitação, 5 são transtornos psiquiátricos</h3>
        </div>
        <div className={styles.sectionBody}>
          <ResponsiveBar
            data={data}
            keys={['value']}
            indexBy='disease'
            margin={{ top: 50, right: 0, bottom: 50, left: 50 }}
            padding={0.4}
            colors='#5076B8'
            borderRadius={4}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Enfermidade',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Quantidade (%)',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelTextColor='#FFFFFF'
        />
        </div>
      </div>
    </section>
  )
}