import NavBar from './components/NavBar';
import Billboard from './components/billboard';
import Contact from './components/contact';
import TextBox from './components/textBox';
import AccordionUsage from './components/accordionService';
import { ABOUT_TEXT, BUSINESS_TEXT } from './content/textContent.jsx';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div>
      <NavBar />
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
    </div>
  );
}

export default App;
