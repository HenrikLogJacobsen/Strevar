
const SessionDetails = ({session}) => {

  return (
    <div className="session-details">
      <h4>{session.title}</h4> 
      {session.exercises && session.exercises.map(e => (
        <p className="container" key={e._id}>{e.title}: {e.reps} x {e.sets} ({e.weight}kg)</p>
      ))}
    </div>
  ) 
}

export default SessionDetails

