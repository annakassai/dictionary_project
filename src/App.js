import logo from './logo.jpg';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid mt-5" alt="logo" rel="noreferrer" />
          <h1 className="text-center">Anna`s dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyWord="sunset"/>
        </main>
        <footer className="App-footer">
          Coded by Anna Kassai
        </footer>
      </div> 
    </div>
  );
}