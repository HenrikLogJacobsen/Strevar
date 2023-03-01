import { useEffect} from "react"

// components
import ExerciseDetails from "../components/ExerciseDetails"
import ExerciseForm from "../components/ExerciseForm"
import { useExerciseCtx } from "../hooks/useExerciseCtx"



const MyExercises = () => {
  const {exercises, dispatchExercise} = useExerciseCtx()

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("api/exercises/")
      const json = await response.json()

      if (response.ok) {
        dispatchExercise({type: "SET_EXERCISES", payload: json})
      }
    }
    
    fetchExercises()
  }, [dispatchExercise])

  return (
    <div className="myExercises">
        <h2>Mine Øvelser</h2>
      <div className="workoutsAndForm">
        <div className="workouts">
          {exercises && exercises.map(exercise => (
            <ExerciseDetails exercise={exercise} key={exercise._id} />
          ))}
        </div>
        <ExerciseForm />
      </div>
    </div>  
  )
}

export default MyExercises