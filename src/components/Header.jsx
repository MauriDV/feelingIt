import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div>
        <header>
            <div className="logo">
              <a href="#"><img src={logo} alt="feelingIT" /></a>
              <h1><a href="#">feelingIT</a></h1>
            </div>  
            <nav>
              <ul>
                <li><a href="">Contacto</a></li> 
              </ul>
            </nav>
        </header>
    </div>
  );
}

export default Header;