import './footer.css';

const Footer = () => {
    return (<>
        <hr className='footerDivider'></hr>
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Spotless Touch Cleaning. All rights reserved.</p>
                <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            </div>
        </footer>
        </>
    );
};

export default Footer;