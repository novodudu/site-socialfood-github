import React, { Component } from "react";

//import componentes da página
import Menu from "../src/components/menu";
import Topo from "../src/components/topo";
import Vantagens from "../src/components/vantagens";
import Somos from "../src/components/somos";
import Rodape from "../src/components/rodape";

function App() {
  return (
    <div className="App">
      <Menu />
      <Topo />
      <Vantagens />
      <Somos />
      <Rodape />
    </div>
  );
}

export default App;
