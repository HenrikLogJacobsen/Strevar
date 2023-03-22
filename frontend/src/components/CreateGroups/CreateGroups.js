import React from 'react'

import './createGroups.css'

import { useState } from "react"
import { useUaCtx } from "../../hooks/useUaCtx"
import { useGroupCtx } from '../../hooks/useGroupCtx'

import FileBase64 from 'react-file-base64'


const CreateGroups = () => {

  const [groupName, setGroupName] = useState('')
  const [description, setDescription] = useState('')
  const [administrator, setAdministrator] = useState('')
  const [members, setMembers] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState(null)
  const {groups, dispatchGroup} = useGroupCtx()


  const { user } = useUaCtx()
  

  const handleSubmit = async (e) => {

    // skal opprette en ny gruppe i backend

    e.preventDefault()

    setAdministrator(user)

    const user_id = user.uid;
    const group = {groupName, description, administrator, members, image}
    // const response = await fetch("/api/groups/", {
    //     method: "POST",
    //     body: JSON.stringify(group),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })

    // const json = await response.json()

    // if(!response.ok) {
    //     setError(json.error)
    // } 

    // else {
    dispatchGroup({type: "CREATE_GROUP", payload: group}) //TODO: husk å endre payload til json
    // }
    
}


  return (
    <form className="createGroups" onSubmit={handleSubmit} >
      <h3>Opprett gruppe</h3>
      
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

      <div className='uploadImg'>
        <p>Last opp et gruppebilde:</p>
        <FileBase64
          multiple={false} 
          onDone={ ({base64}) => setImage({image , image: base64}) } />
      </div>
    
    
      <button className="button">Opprett gruppe</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CreateGroups