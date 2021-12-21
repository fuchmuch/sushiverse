import React from 'react';
import { Link } from 'react-router-dom';
import Validator from '../components/Validator';
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiSearch } from "react-icons/bi"
import Search from './SearchResults';
import SearchResults from './SearchResults';

function Nav() {
  return (

    <nav className="navbar">

      <BiSearch/>
      <form className='searchBar'>
      <SearchResults/>
    </form>

      <Link to="/Login">
     <button type="button">
         Sign Up
     </button>
 </Link>
 
      <MdOutlineAccountCircle size='4rem'/>
        </nav >

  );
}

export default Nav;