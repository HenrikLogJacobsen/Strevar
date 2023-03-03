import { useState } from "react"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async (a) => {
    a.preventDefault()

    console.log("Brukernavn: ", username, "Passord: ", password)
}

  return (
    <form className="login" onSubmit={submitHandler}>
      <h3>Logg inn</h3>
      
      <label>Brukernavn (epost):</label>
      <input 
        type = "username" 
        onChange = {(c) => setUsername(c.target.value)} 
        value = {username} 
      />
      <label>Passord:</label>
      <input 
        type = "password" 
        onChange = {(c) => setPassword(c.target.value)} 
        value = {password} 
      />

      <button>Logg inn</button>
    </form>
  )
}

export default Login

