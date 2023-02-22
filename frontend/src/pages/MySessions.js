import CreateSession from "../components/CreateSession"
import SessionDetails from "../components/SessionDetails"

//TODO: laste inn økter fra database

const MySessions = () => {
    return (
        <div className="mySessions">
            <h2>Mine Treningsøkter</h2>
            <div className="my-sessions">
                <CreateSession/>

                 {/* kun for å vise */}
                <SessionDetails title={'Leg day'} />
                <SessionDetails title={'Full body'}/>
                <SessionDetails title={'Core'}/>
                <SessionDetails title={'Arms'}/>
            </div>
        </div>
    )
}

export default MySessions