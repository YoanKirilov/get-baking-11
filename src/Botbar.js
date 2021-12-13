import './Botbar.css';
import Logo from './Logo.png';
import Button from 'react-bootstrap/Button';

const BotBar = () => {
    return (  
    <nav className="bottom">
        <div className="bottom-bar">
        <img src={Logo}></img>
           <div className="links">
               <Button href="https://www.facebook.com">Facebook</Button>
               <Button href="https://www.instagram.com">Instagram</Button>
               <Button href="https://twitter.com">Twitter</Button>
               <Button href="https://www.youtube.com">YouTube</Button>
               
            </div>
        </div>
    </nav>
    );
}
 
export default BotBar;