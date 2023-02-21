import ExerciseDetails from "../components/ExerciseDetails"
import Program from "../components/Program"
import SessionDetails from "../components/SessionDetails"

const MyPrograms = () => {
    
    return (
      <div className="MyPrograms">
        <h2>Treningsprogram</h2>
        <div className="programs">
          <Program/>
          <Program/>
        </div>
      </div> 
    )
  }
  
  export default MyPrograms