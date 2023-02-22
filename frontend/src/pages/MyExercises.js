import { useEffect} from "react"

// components
import ExerciseDetails from "../components/ExerciseDetails"
import ExerciseForm from "../components/ExerciseForm"
import { useExerciseCtx } from "../hooks/useExerciseCtx"



const MyExercises = () => {
  const {exercises, dispatch} = useExerciseCtx()

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("api/exercises/")
      const json = await response.json()

      if (response.ok) {
        dispatch({type: "SET_EXERCISES", payload: json})
      }
    }
    
    fetchExercises()
  }, [dispatch])

  return (
    <div className="myExercises">
        <h2>Mine Øvelser</h2>
      <div className="workouts">
        {exercises && exercises.map(exercise => (
          <ExerciseDetails exercise={exercise} key={exercise._id} />
        ))}
      </div>
      <ExerciseForm />
    </div>  
  )
}

export default MyExercises