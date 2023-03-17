import React from 'react'

import './createGroups.css'

import { useState } from "react"
import { useUaCtx } from "../../hooks/useUaCtx"


const CreateGroups = () => {

  const [groupName, setGroupName] = useState('')
  const [description, setDescription] = useState('')
  const [administrator, setAdministrator] = useState('')
  const [members, setMembers] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState(null)

  const { user } = useUaCtx()
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    setAdministrator(user)

    const user_id = user.uid;
    const group = {groupName, description, administrator, members, image}
    const response = await fetch("/api/groups/", {
        method: "POST",
        body: JSON.stringify(group),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const json = await response.json()

    if(!response.ok) {
        setError(json.error)
    } 
    
}


  return (
    <form className="createGroups" onSubmit={handleSubmit} >
      <h3>Ny gruppe</h3>
      
      <input
        placeholder="Gruppenavn"
        type = "text"
        onChange = {(e) => setGroupName(e.target.value)}
        value = {groupName}
      />

      <textarea
        className='textarea'
        placeholder="Beskrivelse"
        type = "textarea"
        onChange = {(e) => setDescription(e.target.value)}
        value = {description}
      />

      
      <button className="button">Opprett gruppe</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CreateGroups