import { useContext } from "react"
import { QuizzContext } from "../../context/QuizzContext"

//import './Options.css'

export const Options = ({ option, selectOption, answer }) => {
    const [quizzState, dispatch] = useContext(QuizzContext);

    return (
        <div className={`option 
            ${quizzState.answerSelected && option === answer ? 'correct' : ''}
            ${quizzState.answerSelected && option !== answer ? 'wrong' : ''}`}
            onClick={() => selectOption()}>
            {option}
        </div>
    )
}

