import React from "react";
import produtos from "../data/ListaProdutos";
import "./ListaProdutos.css";

function ListaProdutos(props) {
  function getLinhas() {
    return produtos.map((produto) => {
      return (
        <tr>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>{produto.preço}</td>
        </tr>
      );
    });
  }

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProdutos;
