import { createContext, useReducer } from 'react'

export const ExerciseCtx = createContext()

export const exerciseReducer = (state, action) => {
    switch (action.type) {
        case "SET_EXERCISES":
            return { 
                exercises: action.payload 
            }
        case "CREATE_EXERCISE":
            return { 
                exercises: [...state.exercises, action.payload] 
            }
        default:
            return state
    }
}
export const ExerciseCtxProvider = ({children}) => {
    const [state, dispatch] = useReducer(exerciseReducer, { 
        exercises: null
    })
  
    return (
        <ExerciseCtx.Provider value={{...state, dispatch}}>
            {children}
        </ExerciseCtx.Provider>
    )
}