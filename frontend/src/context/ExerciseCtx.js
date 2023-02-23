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
        case "DELETE_EXERCISE":
            return {
                exercises: state.exercises.filter((e) => e._id !== action.payload._id)
            }
        case "EDIT_EXERCISE":

            return {
                exercises: state.exercises.map(function(e) {
                    if(e._id === action.payload._id) {
                        return action.payload
                    }
                    else {
                        return e
                    }
                })
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