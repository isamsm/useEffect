import { useState, useEffect } from "react";
import SpecialComponent from "./SpecialComponent";
import style from './style.css'

const App = () => {
  const [counter, setCounter] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  
  //componentWillMount 

  useEffect (() =>
  {
    document.title = "React Hooks | UseEffect" //o hook está pegando o titulo da página e o alterando
  }, []);

  //componentWillUpdate

  useEffect(() => {
    alert(`Valor do counter ${counter}`)
  }, [counter]); 

  //useEffect agindo sobre o useState, quando o valor do useState for alterado, o useEffect tem um efeito colateral de mostrar uma mensagem com o valor atual

  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  const handleComponentVisibility = () => {
    setShowComponent(!showComponent); //oposto do valor padrão do showComponent, falso para true, true para falso
  }

  return (
    <>
      <h1> Pronto para codar </h1>
      <h2> {counter} </h2>
      <button onClick={increaseCounter}> Aumenta o counter </button>
      &nbsp;
      <button onClick={handleComponentVisibility}> {showComponent ? "Esconder o componente" : "Exibir o componente especial"} </button>
      <br />
      {showComponent && <SpecialComponent />} 
      {/* && - operação ternária apenas com o if, ou seja, se for verdadeiro exibir o componente */}
    </>
  );
}

export default App;
