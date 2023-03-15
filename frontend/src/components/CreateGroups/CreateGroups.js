import React from 'react'
import './createGroups.css'

const CreateGroups = () => {
  // const [title, setTitle] = useState('')
  // const [workoutType, setWorkoutType] = useState('')
  // const [description, setDescription] = useState('')
  

  return (
    <form className="createGroups" /*onSubmit={handleSubmit}*/>
      <h3>Ny gruppe</h3>
      
      <input
        placeholder="Gruppenavn"
        type = "text"
        // onChange = {(e) => setTitle(e.target.value)}
        // value = {title}
      />

      <input 
        placeholder="Treningstype"
        type = "text"
        // onChange = {(e) => setWorkoutType(e.target.value)}
        // value = {workoutType}
      />

      <input 
        placeholder="Beskrivelse"
        type = "text"
        // onChange = {(e) => setDescription(e.target.value)}
        // value = {description}
      />

      <button className="button">Opprett gruppe</button>
      {/* {error && <div className="error">{error}</div>} */}
    </form>
  )
}

export default CreateGroups