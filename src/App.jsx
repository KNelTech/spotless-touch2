import NavBar from './components/NavBar';
import Billboard from './components/billboard';
import Services from './components/services';

function App() {
  return (
    <div>
      <NavBar />
      <Billboard />
      <Services />
      <main style={{ padding: '20px' }}>
        <h2>Welcome to Spotless Touch!</h2>
        <p>Your trusted cleaning solution in Chicago.</p>
      </main>
    </div>
  );
}

export default App;
