import { useState } from "react";
import motocaLogo from "../src/assets/motoca_logo.png";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("Início");
  const navigate = useNavigate();

  function changeToNovaMoto() {
    navigate("/novaMoto");
    setTitle("Registro de Motos");
  }

  function changeToTabelaMotos() {
    navigate("/tabelaMotos");
    setTitle("Tabela de Motos");
  }
  function changeToHome() {
    navigate("/");
    setTitle("Início");
  }
  function changeToUser() {
    navigate("/user");
    setTitle("Usuário");
  }

  return (
    <div className="App">
      <div className="header">
        <a href="https://motoca.com.br">
          <img src={motocaLogo} className="logo" />
        </a>
        <button onClick={changeToHome}>Home</button>
        <button onClick={changeToNovaMoto}>Cadastrar nova Moto</button>
        <button onClick={changeToTabelaMotos}>Tabela de Motos</button>
        <button onClick={changeToUser}>User</button>
      </div>
      <div className="title">{title}</div>
      <hr></hr>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
