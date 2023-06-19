import { useContext } from "react";
import { QuizzContext } from "../../context/QuizzContext"
import { useNavigate } from 'react-router-dom'

import styles from  '../Finish/Finish.module.css'

export const Finish = () => {
  const [quizzState, dispatch] = useContext(QuizzContext)
  const navigate = useNavigate()

  return (
    <div className={styles.finish-container}>
      <p className={styles.score}>Pontuação: {quizzState.score}/{quizzState.questions.length}</p>
      <button
        className={styles.menu-button}
        onClick={() => {
          dispatch({ type: "MENU" })
          navigate("/posts/create")
        }}
      >
        Menu
      </button>
    </div>
  )
}
