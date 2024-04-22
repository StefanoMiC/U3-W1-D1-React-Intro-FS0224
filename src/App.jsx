// import logo from "./logo.svg";
// questo import crea un path relativo che va ad inserirsi come valore della variabile photo, che potremo usare dentro alle parentesi graffe {} come attributo src
import photo from "./photo-17.avif";
import "./App.css";
import FormGroup from "./components/FormGroup";
import ClassComponent from "./components/ClassComponent";

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
        {/* photo è importato in alto come variabile */}
        <img src={photo} className="App-logo" alt="logo" />
        <p style={{ backgroundColor: "#928372", fontSize: "20px", letterSpacing: "2px" }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {/* questa è un'altra modalità di importare una foto, 
        cioè riferirsi al percorso relativamente alla cartella public come se fosse la principale al momento dell'avvio della App */}
        {/* <img src="./assets/imgs/photo-1713766185582-11567ca38b4b.avif" alt="logo" /> */}

        {/* qualsiasi dato applicato ad un componente come fosse un attributo DIVENTA LA PROP di quel componente 
          è il sistema adottato da React per far fluire dei dati da un "fuori" a un "dentro",
          dal contesto in cui il componente è renderizzato, al suo contesto interno.
          Questo ci permette di utilizzare più istanze dello stesso componente, ma variando i dati in ingresso!
        */}

        <FormGroup id="name" labelTxt="Nome" placeholder="Inserisci il tuo nome" className="second-group" style={{ marginTop: "3rem" }} />
        <FormGroup id="surname" labelTxt="Cognome" placeholder="Inserisci il tuo cognome" className="first-group" style={{ marginTop: "1.5rem" }} />
        <FormGroup id="email" labelTxt="E-mail" placeholder="Inserisci la tua e-mail" className="third-group" style={{ marginTop: "1.5rem" }} />

        <ClassComponent className="margin-3" content="Ciao sono un componente a classe!" />
        <ClassComponent className="margin-5" content="Ciao sono un ALTRO componente a classe!" />
      </header>
    </div>
  );
}

// questo export serve a rendere disponibile questo file per essere importato in un altro file,
// senza l'export default non sarà possibile importare nessun componente in un altro
export default App;
