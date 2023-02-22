import { useExerciseCtx } from "../hooks/useExerciseCtx"

//date handling
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const ExerciseDetails = ({ exercise }) => {
  const {dispatch} = useExerciseCtx()

  const handleDelete = async() => {
    const response = await fetch("/api/exercises/" + exercise._id, {
      method: "DELETE"
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: "DELETE_EXERCISE", payload: json})
    }
  }

  const handleEdit = () => {
      console.log(exercise.tittel)
  }
  

  return (
    <div className="exercise-details">
      <h4>{exercise.tittel}</h4>
      <p><strong>Antall sett: </strong>{exercise.sett}</p>
      <p><strong>Antall repetisjoner: </strong>{exercise.repetisjoner}</p>
      <p><strong>Vekt (kg): </strong>{exercise.vekt}</p>
      <p>{formatDistanceToNow(new Date(exercise.createdAt), {addSuffix: true})}</p>
      <span onClick={handleEdit}>Endre</span>
      <span onClick={handleDelete}>Fjern</span>
    </div>
  ) 
}
  
export default ExerciseDetails