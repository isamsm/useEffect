import React, { useEffect } from "react";

const SpecialComponent = () => {
    useEffect(() => {
        document.title = "Componente Visivel"

        //componentWillDesmount
        return () => {
            document.title = "React Hooks | UseEffect"
        }

    }, []); //sideEffect que quando página é renderizada e componente botão (no App.js) clicado, altera o titulo da página

    return (
        <>
            <h3> Cheque o titulo da página </h3>
        </>
    )
}

export default SpecialComponent;