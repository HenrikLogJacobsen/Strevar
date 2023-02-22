import { useState } from "react"
import { useExerciseCtx } from "../hooks/useExerciseCtx"

const ExerciseForm = () => {
    const [title, setTitle] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [error, setError] = useState(null)
 
    const {dispatch} = useExerciseCtx()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const exercise = {title, sets, reps, weight}
        const response = await fetch("/api/exercises/", {
            method: "POST",
            body: JSON.stringify(exercise),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        } 
        else {
            setTitle('')
            setSets('')
            setReps('')
            setWeight('')
            setError(null)
            console.log("Ny treningsøvelse lagt til", json)
            dispatch({type: "CREATE_EXERCISE", payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Legg til øvelse</h3>

            <label>Navn:</label>
            <input 
                type = "text"
                onChange = {(e) => setTitle(e.target.value)}
                value = {title}
            />

            <label>Sett:</label>
            <input 
                type = "number"
                onChange = {(e) => setSets(e.target.value)}
                value = {sets}
            />

            <label>Repitisjoner:</label>
            <input 
                type = "number"
                onChange = {(e) => setReps(e.target.value)}
                value = {reps}
            />

            <label>Vekt (kg):</label>
            <input 
                type = "number"
                onChange = {(e) => setWeight(e.target.value)}
                value = {weight}
            />

            <button>Legg til</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ExerciseForm