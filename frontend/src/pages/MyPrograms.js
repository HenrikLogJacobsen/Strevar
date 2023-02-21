import ExerciseDetails from "../components/ExerciseDetails"
import Program from "../components/Program"

const MyPrograms = () => {
    
    return (
      <div className="MyPrograms">
        <h2>Treningsprogram</h2>
        <div className="programs">
          <Program programTitle={'Mitt treningsprogram'}/>
          <Program programTitle={'Jonas sitt treningsprogram'}/>
        </div>
      </div> 
    )
  }
  
  export default MyPrograms