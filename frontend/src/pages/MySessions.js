import { useEffect} from "react"

// components
import CreateSession from "../components/CreateSession"
import SessionDetails from "../components/SessionDetails"
import { useSessionCtx } from "../hooks/useSessionCtx"


const MySessions = () => {

    const {sessions, dispatch} = useSessionCtx()

    useEffect(() => {
    const fetchSessions = async () => {
        const response = await fetch("api/sessions/")
        const json = await response.json()
  
        if (response.ok) {
          dispatch({type: "SET_SESSIONS", payload: json})
        }
      }
      
      fetchSessions()
    }, [dispatch])

    return (
        <div className="mySessions">
            <h2>Mine Treningsøkter</h2>
            <div className="createAndSessions">
                <div className="sessions">
                {sessions && sessions.map(session => (
                    <SessionDetails session={session} key={session._id} />
                ))}
                </div>
                <CreateSession/>
            </div>
        </div>
    )
}

export default MySessions