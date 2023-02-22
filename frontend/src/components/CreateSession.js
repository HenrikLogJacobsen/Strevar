import React from 'react'
import Dropdown from './Dropdown'
import { useState } from "react"

export default function CreateSession() {

    const [title, setTitle] = useState()

    // standard øvelser
    const exerciseOptions = [
        { value: "Push-ups", label: "Push-ups"},
        { value: "Hang-ups", label: "Hang-ups"},
        { value: "Planke", label: "Planke"},
        { value: "Sit-ups", label: "Sit-ups"},
        { value: "Utfall", label: "Utfall"},
        { value: "Knebøy", label: "Knebøy"}
    ]


  return (
    <div className="createSession">
        <h3>Lag en økt</h3>
        <input
                className='sessionInput'
                placeholder="Navn på økt"
                type = "text"
                onChange = {(e) => setTitle(e.target.value)}
                value = {title}
            />
        <Dropdown isMulti={true} placeHolder="Velg øvelse..." options={exerciseOptions}/>
        <button className='button'>Lag øvelse</button>
    </div>
  )
}
