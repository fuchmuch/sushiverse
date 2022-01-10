import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Validator from './Validator';
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiSearch } from "react-icons/bi"
import Search from './SearchResults';
import SearchResults from './SearchResults';
// import './styles/css';
import About from './About';



function Nav() {
  const [inputValue, setInputValue] = React.useState('')
  let history = useHistory()
  console.log(inputValue,'<InputValue')

  const onSubmit = (e) =>{
    e.preventDefault();
    const convertedName = inputValue.split(" ").join('-').toLowerCase()
    // SuShi NoZ -> sushi-noz
    history.push(`/places/details/${convertedName}`);
  }
  return (

    <nav className="navbar">
      <BiSearch className='searchicon'/>
      <form className='searchBar' onSubmit={onSubmit}>
      <SearchResults
      onChange={ (e) => {
        setInputValue(e.target.value)}
      }
      value={inputValue}
       />
    </form>

    <Link to="/About">
     <button className="navbutton" type="button">
         About
     </button>
    </Link>  


      <Link to="/Login">
     <button className="navbutton" type="button">
         Login
     </button>
 </Link>

      <Link to="/Home">
      <MdOutlineAccountCircle className= 'accounticon' size='4rem'/>
      </Link>

        </nav >
     

  );
}

export default Nav;