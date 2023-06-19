import styles from '../Welcome/Welcome.module.css'

//hooks 
import { useContext } from 'react'
import { QuizzContext } from '../../context/QuizzContext'
import { useNavigate } from 'react-router-dom'


export const Welcome = () => {

  const [quizzState, dispatch] = useContext(QuizzContext)
  const nav = useNavigate()
  
  return (
    <div className={styles.welcome}>
      <h2>WebQuizz</h2>
      <p>Clique para começar!!</p>

      <button className={styles.btn_play} onClick={() => {
        dispatch({ type: "CHANGE_STATE" })
        nav("/questions")
      }} >Jogar</button>
    </div>
  )
}
