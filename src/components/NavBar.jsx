const NavBar = () => {
    return (
      <nav style={styles.nav}>
        <h1 style={styles.logo}>Spotless Touch</h1>
        <ul style={styles.navLinks}>
          <li><a href="/" style={styles.link}>Home</a></li>
          <li><a href="/about" style={styles.link}>About</a></li>
          <li><a href="/services" style={styles.link}>Services</a></li>
          <li><a href="/contact" style={styles.link}>Contact</a></li>
        </ul>
      </nav>
    );
  };
  
const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#1e90ff',
        position: 'fixed',
        height: '60px',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 2,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    logo: {
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '15px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};
  
  export default NavBar;
  