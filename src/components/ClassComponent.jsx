import React from "react";

// Component è il costruttore principale che ci regalerà delle funzionalità sul nostro componente a Classe

class ClassComponent extends React.Component {
  render() {
    // console.log(this);
    console.log("PROPS in Class Component: ", this.props);
    // render() è il metodo fondamentale e OBBLIGATORIO per ogni componente a classe (non basta solo il return!)
    // il suo scopo è quello di venire chiamato in un momento preciso nel ciclo di vita del componente (dopo che il componente si è montato)
    // DEVE ritornare obbligatoriamente del JSX con le stesse caratteristiche degli altri componenti
    return <div className={`base-class ${this.props.className}`}>{this.props.content}</div>;
  }
}

export default ClassComponent;
