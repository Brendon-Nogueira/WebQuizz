//data
import {questions} from '../data/questions'
// hooks
import { createContext, useReducer} from "react"


export const QuizzContext = createContext()

const states = [ 'Start', 'Playing', 'End']

const init = {
    gameState: states[0],
    questions
}

const quizzReducer = (state, action) =>{

    console.log(state, action)
    switch(action.type){
      case 'CHANGE_STATE' :
            
        return {
            ...state,
            gameState: states[1]
        }

        default: 
            return state
    }
}


export const QuizzProvider = ({children}) =>{
    const value = useReducer(quizzReducer, init)
    return <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
}

