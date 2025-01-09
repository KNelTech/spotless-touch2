import './navbar.css';

const NavBar = () => {
    return (
      <nav className="nav">
      <div className="logo">
      <img src="/Logo.png" alt="Logo" className="logoImage"/>
        <span className="companyName">Spotless Touch</span>
      </div>
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
  