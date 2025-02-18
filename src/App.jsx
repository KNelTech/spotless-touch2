import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Billboard from './components/billboard';
import Contact from './components/contact';
import TextBox from './components/textBox';
import AccordionUsage from './components/accordionService';
import { ABOUT_TEXT, BUSINESS_TEXT, PRIVACY_POLICY_TEXT, mobileImages, desktopImages, transformStyles } from './content/textContent.jsx';
import Footer from './components/footer';
import BounceCards from './components/BounceCards/index.jsx';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Billboard />
            <main>
              <TextBox className="about" readOnly title="About">
                {ABOUT_TEXT}
              </TextBox>
              <BounceCards
  className="custom-bounceCards"
  images={isMobile ? mobileImages : desktopImages}
  containerWidth={450}
  containerHeight={350}
  animationDelay={1}
  animationStagger={0.5}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={!isMobile}
/>
              <AccordionUsage />
              <TextBox className="business-section" readOnly title="Businesses">
                {BUSINESS_TEXT}
              </TextBox>
              <Contact />
            </main>
          </>
        } />
        <Route path="/privacy-policy" element={
          <main>
            <TextBox className="about" readOnly title="Privacy Policy">
              {PRIVACY_POLICY_TEXT}
            </TextBox>
          </main>
        } />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;