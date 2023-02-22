const ExerciseDetails = ({ exercise }) => {

    return (
      <div className="exercise-details">
        <h4>{exercise.title}</h4>
        <p><strong>Antall sett: </strong>{exercise.sets}</p>
        <p><strong>Antall repetisjoner: </strong>{exercise.reps}</p>
        <p><strong>Vekt (kg): </strong>{exercise.weight}</p>

        <p>{exercise.createdAt}</p>
      </div>
    ) 
  }
  
  export default ExerciseDetails