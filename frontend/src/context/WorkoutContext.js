import { createContext, useReducer } from 'react'

export const WorkoutCtx = createContext()

export const workoutReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUTS":
            return { 
                workouts: action.payload 
            }
        case "CREATE_WORKOUT":
            return { 
                workouts: [action.payload, ...state.workouts] 
            }
        default:
            return state
    }
}
export const WorkoutCtxProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutReducer, { 
        workouts: null
    })
  
    return (
        <WorkoutCtx.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutCtx.Provider>
    )
}