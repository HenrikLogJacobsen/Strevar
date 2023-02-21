//TODO: ta inn session her i stedet
// {session.title} osv..

const SessionDetails = ({title, day, week}) => {

  return (
    <div className="session-details">
      <h4>{title}</h4> 
      <p>Uke {week} / Dag {day}</p>
    </div>
  ) 
}

export default SessionDetails