import {Link} from 'react-router-dom';
import arrowBtn from '../assets/arrow.svg'

export function Home(){

    return(
        <main>
        <p>Search on images and save them to<br/> your own collection.</p>
        <Link to={"search"} className='btn'>
        <button className="btn-primary"> Get started</button>
        <img src={arrowBtn} alt="black-arrow"/>
        </Link>
        </main>
    )
}