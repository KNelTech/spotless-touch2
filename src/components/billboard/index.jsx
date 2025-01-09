import './billboard.css';

const Billboard = () => {
    return (
      <div className="container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="slogan">Quick. Easy. Clean.</h1>
        <h2 className="highlight">Spotless Touch</h2>
        <button className="button">Request Estimate</button>
      </div>
      </div>
    );
  };
  
  
  export default Billboard;
  