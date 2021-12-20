import React from 'react';
import { Link } from 'react-router-dom';
import Validator from '../components/Validator';

function Nav() {
  return (
    <nav className="navbar">
       
      <input type= 'text' 
      placeholder='Search restaurants'>
  
      </input>

      <div className ='Login'>
  {/* <Link to = '/Validator'><button>Login</button></Link><br/> */}
    </div>
    </nav>
  );
}

export default Nav;