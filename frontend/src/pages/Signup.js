import {useState} from 'react'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (a) => {
        a.preventDefault()

        console.log("Brukernavn: ", username, "Passord: ", password)
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

            <button>Registrer deg</button>

        </form>
    )
}

export default Signup