import { useSessionCtx } from "../hooks/useSessionCtx"


const SessionDetails = ({session}) => {
  const {dispatchSession} = useSessionCtx()


  const handleDelete = async() => {
    const response = await fetch("/api/sessions/" + session._id, {
      method: "DELETE"
    })
    const json = await response.json()

    if (response.ok) {
      dispatchSession({type: "DELETE_SESSION", payload: json})
      console.log("Fjernet økt:", json)
    }
  }
  
  return (
    <div className="session-details">
      <h4>{session.title}</h4> 
      {session.exercises && session.exercises.map(e => (
        <p className="container" key={e._id}>{e.title}: {e.reps} x {e.sets} ({e.weight}kg)</p>
      ))}
      <button className="button" onClick={handleDelete}>Fjern økt</button>
    </div>
  ) 
}

export default SessionDetails

