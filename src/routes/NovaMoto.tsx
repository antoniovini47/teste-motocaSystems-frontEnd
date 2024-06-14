import { useState } from "react";
import "../App.css";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const NovaMoto = () => {
  const [codigo, setCodigo] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [valor, setValor] = useState("");
  const [status, setStatus] = useState("Em trânsito");

  async function createMoto() {
    console.log("Registrando moto...");

    if (codigo === "" || modelo === "" || cor === "" || valor === "" || status === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    await setDoc(doc(db, "motos", codigo), {
      modelo: modelo,
      cor: cor,
      valor: valor,
      status: status,
    });
  }

  return (
    <div className="form">
      <h1>Preencha as informações abaixo para registrar uma Moto 🏍</h1>
      <h2>Código</h2>
      <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
      <h2>Modelo</h2>
      <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
      <h2>Cor</h2>
      <input type="text" value={cor} onChange={(e) => setCor(e.target.value)} />
      <h2>Valor</h2>
      <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
      <h2>Status</h2>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Em trânsito">Em trânsito</option>
        <option value="Em estoque">Em estoque</option>
        <option value="Sem estoque">Sem estoque</option>
      </select>
      <br></br>
      <button onClick={createMoto}>+ Registrar</button>
    </div>
  );
};

export default NovaMoto;
