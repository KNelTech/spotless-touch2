import './navbar.css';

const NavBar = () => {
    return (
      <nav className="nav">
      <h1 className="logo">Spotless Touch</h1>
      <ul className="navLinks">
        <li><a href="/" className="link">Home</a></li>
        <li><a href="/about" className="link">About</a></li>
        <li><a href="/services" className="link">Services</a></li>
        <li><a href="/contact" className="link">Contact</a></li>
      </ul>
      </nav>
    );
  };
  

  
  export default NavBar;
  