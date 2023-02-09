import { useState } from "react"

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, sets, reps, weight}

        const response = await fetch()
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Workout</h3>

            <label>Exercise:</label>
            <input 
                type = "text"
                onChange = {(e) => setTitle(e.target.value)}
                value = {title}
            />

            <label>Sets:</label>
            <input 
                type = "number"
                onChange = {(e) => setSets(e.target.value)}
                value = {sets}
            />

            <label>Reps:</label>
            <input 
                type = "number"
                onChange = {(e) => setReps(e.target.value)}
                value = {reps}
            />

            <label>Weight [kg]:</label>
            <input 
                type = "number"
                onChange = {(e) => setWeight(e.target.value)}
                value = {weight}
            />

            <button>Add Workout</button>
        </form>
    )
}

export default WorkoutForm