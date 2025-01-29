import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Billboard from './components/billboard';
import Contact from './components/contact';
import TextBox from './components/textBox';
import AccordionUsage from './components/accordionService';
import { ABOUT_TEXT, BUSINESS_TEXT, PRIVACY_POLICY_TEXT } from './content/textContent.jsx';
import Footer from './components/footer';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
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
