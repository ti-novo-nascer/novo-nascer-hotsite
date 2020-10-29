import Fade from 'react-reveal/Fade'
import BlockContent from '@sanity/block-content-to-react'
import styles from './presentation.module.scss'

export interface PresentationProps {
  title: string
  subtitle: string
  text: any
}

export default function Presentation({
  title,
  subtitle,
  text
}: PresentationProps) {
  return (
    <Fade bottom duration={1000}>
      <div className={styles.presentation}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
          <div className={styles.body}>
            <BlockContent blocks={text}/>
          </div>
        </div>
      </div>
    </Fade>
  )
}
