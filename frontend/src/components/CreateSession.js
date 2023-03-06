import React from 'react'
import {  useEffect } from "react"

//components
import Dropdown from './Dropdown'
import { useExerciseCtx } from "../hooks/useExerciseCtx"

export default function CreateSession() {

  const {exercises, dispatchExercise} = useExerciseCtx()


  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("api/exercises/")
      const json = await response.json()

      if (response.ok) {
        dispatchExercise({type: "SET_EXERCISES", payload: json})
      }
    }
    
    fetchExercises()
  }, [dispatchExercise])

  
  return (
    <div className="createSession">
      <h3>Lag en økt</h3>
      {exercises && <Dropdown 
        isMulti={true} 
        placeHolder="Velg øvelse..." 
        options={exercises.map(e => ({value: e._id, label: e.title}))}
        allExercises={exercises}
      />}
    </div>
  )
} 
