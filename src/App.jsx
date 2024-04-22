import logo from "./logo.svg";
import "./App.css";
import FormGroup from "./components/FormGroup";

// Questo file contiene il nostro primo componente React, il principale. App.js
// Qui dentro creeremo i nostri componenti personali, se saranno renderizzati qua dentro prenderanno posto nella nostra Applicazione nel browser

// Che cos'è un componente React? Nella sua forma più basilare, non è altro che una semplicissima funzione! una funzione che però DEVE ritornare del JSX!

// JSX è una sintassi SIMIL-HTML che permette l'inserimento di codice dinamico (JS) direttamente in quello che sembra essere HTML
// Ci permette di avere codice dinamico insieme al markup

// principali differenze tra HTML e JSX:
// - class diventa className (per evitare conflitti con la keyword class dei costruttori)
// - le immagini devono essere scritte con una sintassi di tag autoconclusivo ovvero: <img /> (così come ogni tag autoconclusivo, input, br, hr...)
// - per le label l'attributo "for" diventa "htmlFor"

// tutto quello che non è un valore a stringa, utilizzato nel JSX, dovrà essere delimitato da graffe {}
// all'interno delle stesse abbiamo la possibilità di interpretare qualsiasi valore dinamico

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <FormGroup />
        <FormGroup />
        <FormGroup />
        <FormGroup />
        <FormGroup />
      </header>
    </div>
  );
}

export default App;
