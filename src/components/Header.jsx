import {Link} from 'react-router-dom';

export function Header (){
return (
    <header className="header">
      <Link to={"/"}>
       <h1>SNAPSPIRATION</h1>
      </Link>
      <nav className='navigation'>
        <Link className="nav-link" to={"/"}>
        Home
        </Link>
        <Link className="nav-link" to={"search"}>
        Search
        </Link>
        <Link className="nav-link" to={"collection"}>
        Your collection
        </Link>
      </nav>
    </header>
);

}