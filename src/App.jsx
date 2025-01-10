import NavBar from './components/NavBar';
import Billboard from './components/billboard';
import Services from './components/services';
import TextBox from './components/textBox';
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
        <h1 className='aboutUsTitle'>About Us</h1>
        <TextBox className="about" readOnly>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TextBox>
        <Services />
      </main>
    </div>
  );
}

export default App;
