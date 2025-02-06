import './billboard.css';

const Billboard = () => {
    return (<>
      <div className="container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="slogan">Quick. Easy. Clean.</h1>
        <h2 className="highlight">Spotless Touch</h2>
        <div className="buttonContainer">
        <a href="#contactSubmit" className="link"><button className="button">Request Estimate</button></a><a href="tel:+12247640228" className="link"><button className="buttonPhone"><span className="icon">📞</span> (224)764-0228</button></a></div>
      </div>
      </div>
      </>
    );
  };
  
  
  export default Billboard;
  