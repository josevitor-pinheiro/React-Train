import React from "react";
import {If} from "./If";

function UsuarioInfo({usuario}) {
  const user = usuario || {};
  console.log (usuario)
  return (
    <div>
    <If test={user && user.nome}>
      Seja bem vindo <strong>{user.nome}</strong> !
    </If>
    <If test={!user || !user.nome}>
        Seja bem vindo <strong>Brother</strong> 
    </If>
    </div>
  );
}

export default UsuarioInfo;
