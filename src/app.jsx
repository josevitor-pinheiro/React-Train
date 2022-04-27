import React from "react";

import "./App.css";
import "./index.css";

import ParOuImpar from "./Components/condicional/ParOuImpar";
import UsuarioInfo from "./Components/condicional/UsuárioInfo";
import Card from "./Components/layout/Card";
import Primeiro from "./Components/Basicos/primeiroCompontente";
import ListaProdutos from "./Components/Repetição/TabelaProdutos";

export default function app(props) {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <div>
        <Card titulo="Rendenização condicional" color="#982395">
          <ParOuImpar />
          <UsuarioInfo usuario={{ nome: 'Vitor' }}/>
        </Card>
        <Card titulo="Produtos" color="cyan">
          <ListaProdutos />
        </Card>
        <Card titulo="Exemplo" color="red">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
}
