import {NavLink} from 'react-router-dom';
import '../css/header.css'
import arrow from '../assets/arrow-nav.svg';

export function Header (){
return (
    <header className="header">
      <NavLink to={"/"} className="header-h1">
       <h1>SNAPSPIRATION</h1> 
      </NavLink>
      <nav className='navigation'>
        <NavLink className="nav-link" to={"/"}>
        <span>Home</span>
        <img className="arrow" src={arrow} alt="a black arrow" />
        </NavLink>
        <NavLink className="nav-link" to={"search"}>
        <span>Search</span>
        <img className="arrow" src={arrow} alt="a black arrow" />
        </NavLink>
        <NavLink className="nav-link" to={"collection"}>
        <span>Collection</span>
        <img className="arrow" src={arrow} alt="a black arrow" />
        </NavLink>
      </nav>
    </header>
);

}