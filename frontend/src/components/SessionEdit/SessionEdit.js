import { useState } from "react"
import { useSessionCtx } from "../../hooks/useSessionCtx"

import './sessionEdit.css'

const SessionEdit = ({session}) => {
    const [comment, setComment] = useState(session.comment)
    const [error, setError] = useState(null)

    const {dispatchSession} = useSessionCtx()

    const handleEdit = async (e) => {
        e.preventDefault()

        const SessionEdit = {comment}
        const response = await fetch("/api/sessions/" + session._id, {
            method: "PATCH",
            body: JSON.stringify(SessionEdit),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json()
        if(!response.ok) {
            setError(json.error)
        }

        const responseEdit = await fetch("/api/sessions/" + session._id)

        const jsonEdit = await responseEdit.json()
        if(!responseEdit.ok) {
            setError(jsonEdit.error)
        }
        else {
            setError(null)
            console.log("Treningsøvelse ", json, "ble endret til", jsonEdit)
            dispatchSession({type: "EDIT_SESSION", payload: jsonEdit})
        }
    }

    return (
        <form className="edit">
            <input 
                className="edit-input"
                type = "text"
                onChange = {(e) => setComment(e.target.value)}
                value = {comment}
            />

            <button className="button" onClick={handleEdit}>Lagre</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default SessionEdit