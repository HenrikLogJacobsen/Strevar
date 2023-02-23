import React from 'react'
import { useState, useEffect } from "react"

//components
import Dropdown from './Dropdown'
import { useExerciseCtx } from "../hooks/useExerciseCtx"

export default function CreateSession() {

  const [title, setTitle] = useState("")
  const {exercises, dispatch} = useExerciseCtx()


  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("api/exercises/")
      const json = await response.json()

      if (response.ok) {
        dispatch({type: "SET_EXERCISES", payload: json})
      }
    }
    
    fetchExercises()
  }, [dispatch])
  
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
      {exercises && <Dropdown isMulti={true} placeHolder="Velg øvelse..." options={
        exercises.map(e => ({value: e.title, label: e.title}))
      }/>}

      <button className='button'>Opprett ny økt</button>
    </div>
  )
} 
