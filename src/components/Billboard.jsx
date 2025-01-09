const Billboard = () => {
    return (
      <div style={styles.container}>
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <h1 style={styles.slogan}>House cleaning that is</h1>
          <h2 style={styles.highlight}>cleaner than clean</h2>
          <button style={styles.button}>Request Estimate</button>
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      position: 'relative',
      height: '80vh', // Adjust for screen height
      backgroundImage: 'url("/public/chicagoSkyline.webp")', // Replace with your image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
    },
    slogan: {
      fontSize: '36px',
      marginBottom: '10px',
    },
    highlight: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '18px',
      backgroundColor: '#1e90ff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };
  
  styles.button[':hover'] = {
    backgroundColor: '#0056b3',
  };
  
  export default Billboard;
  