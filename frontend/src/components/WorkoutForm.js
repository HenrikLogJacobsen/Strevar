import { useState } from "react"

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [error, setError] = useState(null)
 

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, sets, reps, weight}

        const response = await fetch("/api/treningsokter", {
            method: "POST",
            body: JSON.stringify(workout),
            header: {
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
            console.log("Ny treningsøkt lagt til", json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Legg til økt</h3>

            <label>Øvelse:</label>
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
        </form>
    )
}

export default WorkoutForm