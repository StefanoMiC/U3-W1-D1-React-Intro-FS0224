// import React from "react";
// un componente React DEVE SEMPRE essere chiamato con la prima lettera maiuscola.
// E' buona prassi dare il nome alla funzione uguale al nome del file!

// Il componente DEVE ritornare almeno un elemento JSX (e uno soltanto!)

// a volte potremmo non avere piacere di essere forzati a creare un div aggiuntivo attorno agli elementi che vogliamo renderizzare,
// solo per rispettare la regola del singolo elemento ritornato dalla funzione.
// Allora possiamo sostituire il <div></div> esterno con un frammento react <></> (vedi sotto).
// function FormGroup() {
//   return (
//     <div>
//       <label htmlFor="name" className="custom-label">
//         Nome
//       </label>

//       <input id="name" type="text" placeholder="Inserisci il tuo nome" />
//     </div>
//   );
// }

// versione con fragment in forma estesa (da utilizzare con import di React in alto. Non seve l'import con la versione contratta invece)
// function FormGroup() {
//   return (
//     <React.Fragment>
//       <label htmlFor="name" className="custom-label">
//         Nome
//       </label>

//       <input id="name" type="text" placeholder="Inserisci il tuo nome" />
//     </React.Fragment>
//   );
// }

// function FormGroup(propsObj) {
//   console.log("PROPS", propsObj);
//   return (
//     // questa è la forma abbreviata di un React.Fragment
//     // ci permette di rispettare la regola dei componenti di ritornare un singolo elemento JSX dalla funzione,
//     // SENZA creare nessun elemento aggiuntivo nella pagina!
//     <>
//       <label htmlFor={propsObj.id} className={propsObj.className} style={propsObj.style}>
//         {propsObj.labelTxt}
//       </label>

//       <input id={propsObj.id} type="text" placeholder={propsObj.placeholder} />
//     </>
//   );
// }

// const FormGroup = propsObj => {
//   console.log("PROPS", propsObj);
//   return (
//     // questa è la forma abbreviata di un React.Fragment
//     // ci permette di rispettare la regola dei componenti di ritornare un singolo elemento JSX dalla funzione,
//     // SENZA creare nessun elemento aggiuntivo nella pagina!
//     <>
//       <label htmlFor={propsObj.id} className={propsObj.className} style={propsObj.style}>
//         {propsObj.labelTxt}
//       </label>

//       <input id={propsObj.id} type="text" placeholder={propsObj.placeholder} />
//     </>
//   );
// };

const FormGroup = propsObj => (
  <>
    <label htmlFor={propsObj.id} className={propsObj.className} style={propsObj.style}>
      {propsObj.labelTxt}
    </label>
    <input id={propsObj.id} type="text" placeholder={propsObj.placeholder} />
  </>
);

export default FormGroup;
