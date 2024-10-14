import {NavLink} from 'react-router-dom';

export function Header (){
return (
    <header className="header">
      <NavLink to={"/"}>
       <h1>SNAPSPIRATION</h1>
      </NavLink>
      <nav className='navigation'>
        <NavLink className="nav-link" to={"/"}>
        Home
        </NavLink>
        <NavLink className="nav-link" to={"search"}>
        Search
        </NavLink>
        <NavLink className="nav-link" to={"collection"}>
        Your collection
        </NavLink>
      </nav>
    </header>
);

}