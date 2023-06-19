
import { useNavigate } from 'react-router-dom'
import { fetchQuestions } from '../../data/questions'
import styles from '../Dashboard/Dashobard.module.css'


 export const Dashboard = () => {
  const nav = useNavigate()

  const handleCardClick = (e) => {
    fetchQuestions(e)
    nav('/welcome')
  }

  return (
    <div className={styles.dashboard}>
      <h2>Teste seus conhecimentos em programação</h2>
      <p>Escolha um tópico abaixo e veja como você se sai!</p>
      <div className={styles.cardRow}>
        <div className={styles.card} onClick={() => handleCardClick('HTML')}>
          <h3>HTML</h3>
          <p>Teste seu conhecimento sobre HTML</p>
        </div>
        <div className={styles.card} onClick={() => handleCardClick('CSS')}>
          <h3>CSS</h3>
          <p>Teste seu conhecimento sobre CSS</p>
        </div>
        <div className={styles.card} onClick={() => handleCardClick('JavaScript')}>
          <h3>JavaScript</h3>
          <p>Teste seu conhecimento sobre JavaScript</p>
        </div>
      </div>
      <div className={styles.cardRow}>
        <div className={styles.card} onClick={() => handleCardClick('php')}>
          <h3>PHP</h3>
          <p>Teste seu conhecimento sobre PHP</p>
        </div>
        <div className={styles.card} onClick={() => handleCardClick('React')}>

          <h3>React</h3>
          <p>Teste seu conhecimento sobre React</p>
        </div>
        <div className={styles.card} onClick={() => handleCardClick('Angular')}>
          <h3>Angular</h3>
          <p>Teste seu conhecimento sobre Angular</p>
        </div>
      </div>
    </div>
  )
}




