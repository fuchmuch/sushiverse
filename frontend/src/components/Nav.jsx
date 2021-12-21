import React from 'react';
import { Link } from 'react-router-dom';
import Validator from '../components/Validator';
import {MdOutlineAccountCircle} from "react-icons/md";
import {BiSearch} from "react-icons/bi"

function Nav() {
  return (

    <nav className="navbar">
      <input type= 'text' 
      placeholder='Search restaurants'>
      </input>
      <MdOutlineAccountCircle size='4rem' />
        </nav>

  );
}

export default Nav;