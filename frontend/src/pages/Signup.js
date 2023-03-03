import {useState} from 'react'
import {useSignup} from "../hooks/useSignup"

const Signup = () => {
    const {signup, error, isLoading} = useState("")
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (a) => {
        a.preventDefault()

        console.log("Brukernavn: ", username, "Passord: ", password)
        await signup(username, password)
    }

    return (
        <form className="signup" onSubmit={submitHandler}>
            <h3>Registrer ny bruker: </h3>

            <label>Brukernavn (epost): </label>
            <input
                type = "username"
                onChange = {(c) => setUsername(c.target.value)}
                value = {username}
            />

            <label>Passord: </label>
            <input
                type = "password"
                onChange = {(p) => setPassword(p.target.value)}
                value = {password}
            />

            <button disabled={isLoading}>Registrer deg</button>
            {error && <div className="Feilmelding">{error}</div>}

        </form>
    )
}

export default Signup