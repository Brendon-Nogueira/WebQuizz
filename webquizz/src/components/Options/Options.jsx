import { useContext } from "react"
import { QuizzContext } from "../../context/QuizzContext"
import './Options.css'

export const Options = ({ opcoes, selectOption, resposta }) => {
    const [quizzState, dispatch] = useContext(QuizzContext);

    return (
        <div className={`option 
            ${quizzState.answerSelected && opcoes === resposta ? 'correct' : ''}
            ${quizzState.answerSelected && opcoes !== resposta ? 'wrong' : ''}`}
            onClick={() => selectOption()}>
            {opcoes}
        </div>
    )
}
