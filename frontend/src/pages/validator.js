import React from 'react'
import '../styles/Validator.css'
import {useState} from "react";

const Validator = () => {

   
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [passwordConfirm, setPwdConfirm] = useState("")
const [valid, setValid] = useState(false)

 const passwordCheck = (e) => { 
  e.preventDefault()
  if (username && (password === passwordConfirm)){
   setValid (true) 
  } else {  setValid (false)
  } 
}



const handleChange= (e) => {
  switch (e.target.id){
    case 'username':
      setUsername(e.target.value)
      break;
    case 'password':
      setPassword(e.target.value)
    break;
  
    case 'passwordConfirm':
    setPwdConfirm(e.target.value)
    break;
    default:
      break;
}
}

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input type="text" 
        placeholder="Username" 
        id="username" 
    
        onChange = {handleChange}/>
        <label htmlFor="username">Username</label>

        <input type="password" 
        placeholder="Password" 
        id="password" 
        onChange = {handleChange}/>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          onChange = {handleChange}/>
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit" onClick ={passwordCheck}  >Sign Up</button>
        <p className = {valid ? 'valid' : 'invalid' }>Passwords must match.</p>
      </form>
    </div>
  )
}

export default Validator