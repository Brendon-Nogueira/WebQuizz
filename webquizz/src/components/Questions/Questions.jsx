import { useContext } from "react";
import { QuizzContext } from "../../context/QuizzContext";
import { Options } from '../Options/Options'


export const Questions = () => {
    const [quizzState, dispatch] = useContext(QuizzContext);
    const currentQuest = quizzState.questions[quizzState.currentQuest]

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: {
                answer: currentQuest.answer,
                option
            }
        })
    }

    return (
        <div id="question">
            <p>Pergunta de {quizzState.currentQuestion + 1} a {quizzState.questions.length}</p>
            <h2>{currentQuest.question}</h2>
            <div id="options-container">
                {currentQuest.options.map((option) => (
                    <Options
                        option={option}
                        key={option}
                        answer={currentQuest.answer}
                        selectOption={() => onSelectOption(option)}
                    />))}
            </div>
            {quizzState.answerSelected && (
                <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
                    Continuar
                </button>
            )}

        </div>
    )
}
