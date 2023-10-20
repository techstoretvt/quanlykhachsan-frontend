import styles from './home.module.scss'

import Banner from '../components/banner/banner'

export default function Home() {
  return (
    <div className={styles.Homepage}>
      <Banner />
    </div>
  )
}
