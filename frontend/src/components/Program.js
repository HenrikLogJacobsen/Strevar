import SessionDetails from "./SessionDetails"

const Program = () => {

    return (
      <div className="training-program">
        <h3>(Navn på treningsprogram)</h3>
        <div className="sessions">
        {/* TODO: hente ut session-objekter på id*/}

          {/* {sessions && sessions.map(session => (
            <SessionDetails session={session} key={session._id} />
          ))} */}

          {/* kun for å vise */}
          <SessionDetails/>
          <SessionDetails/>
          <SessionDetails/>
          <SessionDetails/>
          <SessionDetails/>
          <SessionDetails/>
        </div>
      </div>
    ) 
  }
  
  export default Program