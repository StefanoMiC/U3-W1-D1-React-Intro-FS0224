import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//questo codice ci collega al div con id "root" nell'index.html, crea il punto di partenza per la nostra React App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // questo è il componente principale, dove verrà renderizzato qualsiasi cosa personale relativa alla nostra applicazione
  <App />
);
