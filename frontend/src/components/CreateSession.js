import React from 'react'
import Dropdown from './Dropdown'

export default function CreateSession() {

    const options = [
        { value: "Push-ups", label: "Push-ups"},
        { value: "Hang-ups", label: "Hang-ups"},
        { value: "Planke", label: "Planke"}
    ]


  return (
    <div className="createSession">
        <h3>Lag en økt</h3>
        <Dropdown placeHolder="Velg øvelse..." options={options}/>
    </div>
  )
}
