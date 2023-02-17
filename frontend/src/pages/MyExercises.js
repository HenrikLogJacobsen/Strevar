import { useEffect} from "react"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { useWorkoutCtx } from "../hooks/useWorkoutCtx"



const MyExercises = () => {
  const {workouts, dispatch} = useWorkoutCtx()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/treningsokter")
      const json = await response.json()

      if (response.ok) {
        dispatch({type: "SET_WORKOUTS", payload: json})
      }
    }
    
    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="myExercises">
        <h2>Mine Øvelser</h2>
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>  
  )
}

export default MyExercises