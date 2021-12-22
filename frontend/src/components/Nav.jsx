import React from 'react';
import { Link } from 'react-router-dom';
import Validator from '../components/Validator';
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiSearch } from "react-icons/bi"
import Search from './SearchResults';
import SearchResults from './SearchResults';
// import './styles/css';



function Nav() {
  return (

    <nav className="navbar">

      <BiSearch className='searchicon'/>
      <form className='searchBar'>
      <SearchResults/>
    </form>

      <Link to="/Login">
     <button className="navbutton" type="button">
         Sign Up
     </button>
 </Link>
 
      <MdOutlineAccountCircle className= 'accounticon' size='4rem'/>
        </nav >

  );
}

export default Nav;