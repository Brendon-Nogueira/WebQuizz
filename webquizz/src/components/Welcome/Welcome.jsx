import styles from '../Welcome/Welcome.module.css'
 export const Welcome = () => {
  return (
    <div className={styles.welcome}>
        <h2 className={styles.title}>WebQuizz</h2>
        <p className={styles.paragraph}>Clique para começar!!</p>

        <button className={styles.btn_play}>Jogar</button>
    </div>
  )
}

