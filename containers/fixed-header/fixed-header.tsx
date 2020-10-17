import classNames from 'classnames'
import Fade from 'react-reveal/Fade'
import ExternalLink from '../../components/external-link'
import TwentyFourHours from '../../components/24-hours'
import SendEmail from '../../components/send-email'
import styles from './fixed-header.module.scss'

export interface FixedHeaderProps {
  className: string
  show: boolean
}

export default function FixedHeader({ className, show }: FixedHeaderProps) {
  return (
    <Fade top duration={400}>
      <header
        className={
          classNames({
            [className]: true,
            [styles.fixedHeader]: true,
            [styles.hide]: !show
          })
        }
      >
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <a href='#contact-form'>
              <button>
                <SendEmail/>
                <span>contato@novonascer.com.br</span>
              </button>
            </a>
            <ExternalLink href='https://www.novonascer.com.br/'>
              <img src='/novo-nascer-simbolo-azul.svg' alt='Logo da Clínica Hospitalar Novo Nascer'/>
            </ExternalLink>
            <ExternalLink href='https://wa.me/5581973163700'>
              <button>
                <TwentyFourHours/>
                <span>(81) 97316-3700</span>
              </button>
            </ExternalLink>
          </div>
        </div>
      </header>
    </Fade>
  )
}
