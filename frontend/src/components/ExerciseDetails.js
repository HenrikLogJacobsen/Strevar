const ExerciseDetails = ({ exercise }) => {

    return (
      <div className="exercise-details">
        <h4>{exercise.tittel}</h4>
        <p><strong>Antall sett: </strong>{exercise.sett}</p>
        <p><strong>Antall repetisjoner: </strong>{exercise.repetisjoner}</p>
        <p><strong>Vekt (kg): </strong>{exercise.vekt}</p>

        <p>{exercise.createdAt}</p>
      </div>
    ) 
  }
  
  export default ExerciseDetails