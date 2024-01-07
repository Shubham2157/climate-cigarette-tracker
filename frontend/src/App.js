import './App.css';
import NavBar from './components/NavBar'
import Main from './components/Main'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
          <Main/>
      </header>
    </div>
  );
}

export default App;
