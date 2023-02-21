import { useState } from "react"
import { useExerciseCtx } from "../hooks/useExerciseCtx"

const ExerciseForm = () => {
    const [tittel, setTitle] = useState('')
    const [sett, setSets] = useState('')
    const [repetisjoner, setReps] = useState('')
    const [vekt, setWeight] = useState('')
    const [error, setError] = useState(null)
 
    const {dispatch} = useExerciseCtx()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const exercise = {tittel, sett, repetisjoner, vekt}
        const response = await fetch("/api/treningsokter", {
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

            <input
                placeholder="Navn"
                type = "text"
                onChange = {(e) => setTitle(e.target.value)}
                value = {tittel}
            />

            <input 
                placeholder="Antall sett"
                type = "number"
                onChange = {(e) => setSets(e.target.value)}
                value = {sett}
            />

            <input 
                placeholder="Repetisjoner"
                type = "number"
                onChange = {(e) => setReps(e.target.value)}
                value = {repetisjoner}
            />

            <input 
                placeholder="Vekt (kg)"
                type = "number"
                onChange = {(e) => setWeight(e.target.value)}
                value = {vekt}
            />

            <button className="button">Legg til</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ExerciseForm