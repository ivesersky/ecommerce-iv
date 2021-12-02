import logo from './logo3.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hi, I'm Ivy. I'm a multimedial artist and soon-to-be Front End Web Developer</p>
        <a
          className="App-link"
          href="https://ivesersky-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          and this is my Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
