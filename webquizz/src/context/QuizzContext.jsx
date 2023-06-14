//data
import {questions} from '../data/questions'
// hooks
import { createContext, useReducer} from "react"


export const QuizzContext = createContext()

const states = [ 'Start', 'Playing', 'End']

const init = {
    gameState: states[0],
    questions,
    currentQuest: 0,
    score: 0,
    answerSelected: false
}

const quizzReducer = (state, action) =>{

    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameState: states[1]
            }

        case "REORDER_QUESTIONS":
            const reorderQuestions = questions.sort(() => {
                return Math.random() - 0.5
            })
            return {
                ...state,
                questions: reorderQuestions
            }

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuest++
            let endGame = false

            if (!questions[nextQuestion]) {
                endGame = true
            }

            return {
                ...state,
                currentQuest: nextQuestion,
                gameState: endGame ? states[2] : state.gameState,
                answerSelected: false
            }

        case "CHECK_ANSWER":
            if(state.answerSelected) return state

            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0

            if(answer === option) {correctAnswer = 1}

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option
            }


        case "MENU":
            return initialState

        default:
            return state;
    }
}


export const QuizzProvider = ({children}) =>{
    const value = useReducer(quizzReducer, init)
    return <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
}

