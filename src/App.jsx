import NavBar from './components/NavBar';
import Billboard from './components/billboard';
import Contact from './components/contact';
import TextBox from './components/textBox';
import AccordionUsage from './components/accordionService';
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
        <TextBox className="about" readOnly>
        Spotless Touch is more than a cleaning service, we’re your solution for a sparkling home or business. We combine high-quality cleaning techniques with personalized care to give your space the attention it deserves. Experience the difference with Spotless Touch today!    
        </TextBox>        
        <AccordionUsage />
         <Contact />
      </main>
    </div>
  );
}

export default App;
