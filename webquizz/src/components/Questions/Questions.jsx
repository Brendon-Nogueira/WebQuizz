import { useContext, useEffect } from "react"
import { QuizzContext } from "../../context/QuizzContext"
import { Options } from "../Options/Options"
import { useNavigate } from "react-router-dom"
import { fetchQuestions } from "../../data/questions"
import  styles from "../Questions/Questions.module.css"

export const Questions = () => {
  const [quizzState, dispatch] = useContext(QuizzContext);
  const currentQuest = quizzState.questions[quizzState.currentQuest]
  const navigate = useNavigate()
  
  
  useEffect(() =>{
    fetchQuestions()
  },[])
  
  const onSelectOption = (opcoes) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: {
        resposta: currentQuest.resposta,
        opcoes,
      },
    })
  }

  return (
    <div className={styles.question}>
      <p>Pergunta de {quizzState.currentQuest + 1} a {quizzState.questions.length}</p>
      <h2>{currentQuest.pergunta}</h2>
      <div className={styles.container}>
        {currentQuest.opcoes.map((opt) => (
          <Options
            opcoes={opt}
            key={opt}
            resposta={currentQuest.resposta}
            selectOption={() => onSelectOption(opt)}
          />
        ))}
      </div>
      {quizzState.answerSelected && (
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_QUESTION" })
            if (quizzState.currentQuest + 1 === quizzState.questions.length) {
              navigate("/finish")
            }
          }}
        >
          Continuar
        </button>
      )}
    </div>
  )
}