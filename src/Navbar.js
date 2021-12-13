import './Navbar.css';
import { Link } from "react-router-dom";
import Logo from './Logo.png';

const Navbar  = () => {
    return ( 
       <nav className="navbar">
            <img src={Logo}></img>
           <div className="links">
               <Link to="/homepage">Home</Link>
               <Link to="/recipes">Recipes</Link>
               <Link to="/create">Create Recipe</Link>
           </div>
       </nav>
     );
}
 
export default Navbar;