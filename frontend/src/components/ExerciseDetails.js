import { useExerciseCtx } from "../hooks/useExerciseCtx"
import ExerciseEdit from "./ExerciseEdit"
import { useState } from "react"

//date handling
import formatDistanceToNow from "date-fns/formatDistanceToNow"


const ExerciseDetails = ({ exercise }) => {
  const {dispatch} = useExerciseCtx()
  const [editForm, setEditForm] = useState([]);

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
      setEditForm(<ExerciseEdit exercise={exercise} key={exercise._id} />)
  }
  

  return (
    <div className="exercise-details">
      <h4>{exercise.title}</h4>
      <p><strong>Antall sett: </strong>{exercise.sets}</p>
      <p><strong>Antall repetisjoner: </strong>{exercise.reps}</p>
      <p><strong>Vekt (kg): </strong>{exercise.weight}</p>
      {editForm}
      <p>{formatDistanceToNow(new Date(exercise.createdAt), {addSuffix: true})}</p>
      <span onClick={handleEdit}>Endre</span>
      <span onClick={handleDelete}>Fjern</span>
    </div>
  ) 
}
  
export default ExerciseDetails