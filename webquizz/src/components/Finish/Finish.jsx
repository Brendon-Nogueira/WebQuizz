import { useContext } from "react"
import { QuizzContext } from "../../context/QuizzContext"
import { useNavigate } from 'react-router-dom'
import "./Finish.css";

export const Finish = () => {
  const [quizState, dispatch] = useContext(QuizzContext);
  const navigate = useNavigate();

  return (
    <div className="finish-container">
      <p className="score">Pontuação: {quizState.score}/{quizState.questions.length}</p>
      <button
        className="menu-button"
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