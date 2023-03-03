import { createContext, useReducer } from 'react'

export const UaCtx = createContext()

export const uaReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const UaCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uaReducer, { 
    user: null
  })

  console.log('User Auth State:', state)
  
  return (
    <UaCtx.Provider value={{ ...state, dispatch }}>
      { children }
    </UaCtx.Provider>
  )

}