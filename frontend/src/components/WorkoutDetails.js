const WorkoutDetails = ({ workout }) => {

    return (
      <div className="workout-details">
        <h4>{workout.tittel}</h4>
        <p><strong>Antall sett: </strong>{workout.sett}</p>
        <p><strong>Antall repetisjoner: </strong>{workout.repetisjoner}</p>
        <p><strong>Vekt (kg): </strong>{workout.vekt}</p>

        <p>{workout.createdAt}</p>
      </div>
    ) 
  }
  
  export default WorkoutDetails