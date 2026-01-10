import logo from './logo.svg';
import './App.css';

// JSX code 
// JSX means JavaScriot + XML
// jsx allows us to write HTML elemnts in JavaScript and 
// place then in the DOM without any createElement()
// VDOM: 
    // React creates virtual DOM .
    //When stste changes in a component
    //it runs a diffing algorithm , which 
    // identifies what has changed in the virtual DOM.
    //The virtual Dom will then update the real DOM only in the places
    //wher changes have occured.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TransFlower Ecommerece Application
        </a>
      </header>
    </div>
  );
}

export default App;
