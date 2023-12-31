import { createContext, useReducer } from 'react'

export const SessionCtx = createContext()

export const sessionReducer = (state, action) => {
    switch (action.type) {
        case "SET_SESSIONS":
            return { 
                sessions: action.payload 
            }
        case "CREATE_SESSION":
            return { 
                sessions: [...state.sessions, action.payload] 
            }
        default:
            return state
    }
}
export const SessionCtxProvider = ({children}) => {
    const [state, dispatchSession] = useReducer(sessionReducer, { 
        sessions: null
    })
  
    return (
        <SessionCtx.Provider value={{...state, dispatchSession}}>
            {children}
        </SessionCtx.Provider>
    )
}