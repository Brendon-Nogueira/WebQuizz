import { useContext } from "react"
import { QuizzContext } from "../../context/QuizzContext"



 export const Finish = () => {
    const [quizState, dispatch] = useContext(QuizzContext);

    return (
        <div>
            <p>Pontuação: {quizState.score}/{quizState.questions.length}</p>
            <button onClick={() => dispatch({type: "MENU"})}>Menu</button>
        </div>
    )
}

