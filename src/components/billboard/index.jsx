import './billboard.css';

const Billboard = () => {
    return (
      <div className="container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="slogan">Quick. Easy. Clean.</h1>
        <h2 className="highlight">Spotless Touch</h2>
        <a href="#contactSubmit" className="link"><button className="button">Request Estimate</button></a>
      </div>
      </div>
    );
  };
  
  
  export default Billboard;
  