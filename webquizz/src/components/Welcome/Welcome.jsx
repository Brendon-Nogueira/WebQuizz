import styles from '../Welcome/Welcome.module.css'

//hooks 
import { useContext } from 'react'
import { QuizzContext } from '../../context/QuizzContext'



 export const Welcome = () => {

 const [quizzState, dispatch] = useContext(QuizzContext)

 //console.log(quizzState)

  return (
    <div className={styles.Welcome}>
        <h2>WebQuizz</h2>
        <p>Clique para começar!!</p>

        <button className={styles.btn_play} onClick={() => dispatch({type: "CHANGE_STATE"})}>Jogar</button>
    </div>
  )
}

