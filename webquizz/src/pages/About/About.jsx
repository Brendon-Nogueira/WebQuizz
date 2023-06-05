import styles from './About.module.css'
import { Link } from 'react-router-dom'

 export const About = () => {
  return (
    <div className={styles.about} >
      <h2>Sobre o WebQuizz <span>React </span></h2>
      <p> Este projeto consiste em um Quizz , feito em React no Front-end e Firebase no Back-end.</p>
      <p>Para treinar alguns conceitos muito importantes para o comportamento de uma SPA, além de ser um projeto voltado para o TCC.</p>

      <Link to="/posts/create" className="btn">Faça o teste</Link>
    </div>

    
  )
}

