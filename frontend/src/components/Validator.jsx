import React from 'react'
import '../styles/validator.css'
import {useState} from "react";
import {useHistory} from 'react-router-dom';



export default function Validator(props) {


const [email, setEmail] = useState("")
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [passwordConfirm, setPwdConfirm] = useState("")
const [valid, setValid] = useState(false)
const history= useHistory();



 const passwordCheck = (e) => { 
  e.preventDefault()
  if (username && email && (password === passwordConfirm)){
   setValid (true) 
   history.push('/')
  } else {  setValid (false)
  } 
}

const handleChange= (e) => {
  switch (e.target.id){
    case'email':
      setEmail(e.target.value)
      break;
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

      <img src= {"https://i.imgur.com/61gAr4u.jpg"} alt="logo"/> 

      <h3>Please create an account to continue.</h3>
      <h4>Let’s get some basic information so that restaurants know who you are.</h4> 
      <form>
      <input type="text" 
        placeholder="Email Address" 
        id= "email" 
        onChange = {handleChange}/>
        <label htmlFor="email">Email Address</label>

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
        <p className = {valid ? 'valid' : 'invalid' }>Email address or passwords must match.</p>

      </form>
    </div>
  )
  }