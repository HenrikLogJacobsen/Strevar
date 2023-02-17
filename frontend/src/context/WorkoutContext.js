import { createContext, useReducer } from 'react'

export const WorkoutCtx = createContext()

export const workoutReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUTS":
            return { 
                workout: action.payload 
            }
        case "CREATE_WORKOUT":
            return { 
                workout: [action.payload, ...state.workout] 
            }
        default:
            return state
    }
}
export const WorkoutCtxProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutReducer, { 
        workout: null
    })
  
    return (
        <WorkoutCtx.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutCtx.Provider>
    )
}