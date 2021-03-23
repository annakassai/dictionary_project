import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        <div class="d-flex justify-content-center mt-5">
          <svg width="65" height="50" className="svglogo">
              <circle cx="40" cy="25" r="23" fill="none" stroke="#ff69b4" stroke-width="4"/>
              <text x="60%" y="50%" text-anchor="middle" fill="#000000" font-size="22px" font-family="Playfair Display" font-weight="600" dy=".3em">AK</text>
          </svg>
          <h1 className="text-center">Anna`s dictionary</h1>
        </div>  
        </header>
        <main>
          <Dictionary defaultKeyWord="sunset"/>
        </main>
        <footer className="App-footer">
        <small className="link">Coded by 
            <a 
            className="linkedin-link"
            href="https://www.linkedin.com/in/annakassai91/"
            target="_blank"
            rel="noreferrer"
            > Anna Kassai 
            </a>, open-sourced on <a
            className="github-link"
            href="https://github.com/annakassai/dictionary_project"
            target="_blank"
            rel="noreferrer"
            >
            GitHub
            </a>, hosted on
            <a
            className="netlify-link"
            href="https://happy-hugle-f56d32.netlify.app"
            target="_blank"
            rel="noreferrer"> Netlify
            </a>
        </small>
        </footer>
      </div> 
    </div>
  );
}