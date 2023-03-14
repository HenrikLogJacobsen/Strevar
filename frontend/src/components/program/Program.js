import SessionDetails from "../SessionDetails/SessionDetails"
import AddSession from "./AddSessionBtn"

import './program.css'

//TODO: program-objekt (tittel, person, sessions[])
const Program = ({programTitle}) => {

    return (
      <div className="training-program">
        <h3>{programTitle}</h3>
        <div className="program-sessions">

        {/* TODO: 
        - hente ut session-objekter
        - mappe riktig session til riktig person og program
        */}


          {/* kun for å vise */}
        {/* <SessionDetails title={'Leg day'} week={1} day={1}/>
        <SessionDetails title={'Full body'} week={1} day={2}/>
        <SessionDetails title={'Core'} week={1} day={3}/>
        <SessionDetails title={'Arms'} week={1} day={4}/> */}

        <AddSession/>
          
        </div>
      </div>
    ) 
  }
  
  export default Program