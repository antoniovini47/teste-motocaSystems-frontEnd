import { useState } from "react";
import "../App.css";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { message } from "antd";

const NovaMoto = () => {
  const [buttonRegistrarText, setButtonRegistrarText] = useState("+ Registrar");
  const [codigo, setCodigo] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [valor, setValor] = useState("");
  const [status, setStatus] = useState("Em trânsito");

  async function createMoto() {
    console.log("Registrando moto...");

    if (codigo === "" || modelo === "" || cor === "" || valor === "" || status === "") {
      message.info("Por favor, preencha todos os campos!", 4);
      return;
    }
    setButtonRegistrarText("Registrando...");

    await setDoc(doc(db, "motos", codigo), {
      modelo: modelo,
      cor: cor,
      valor: valor,
      status: status,
    })
      .then(() => {
        message.success("Moto registrada com sucesso!", 4);
        setButtonRegistrarText("+ Registrar");
        setCodigo("");
        setModelo("");
        setCor("");
        setValor("");
        setStatus("Em trânsito");
      })
      .catch((error) => {
        message.error("Erro ao registrar moto: " + error.toString(), 4);
        setButtonRegistrarText("+ Registrar");
      });
  }

  return (
    <div className="form">
      <h1>Preencha as informações abaixo para registrar uma Moto 🏍</h1>
      <h2>Código</h2>
      <input
        disabled={buttonRegistrarText == "Registrando..."}
        type="text"
        placeholder="Crie um código..."
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <h2>Modelo</h2>
      <input
        placeholder="Digite o modelo..."
        disabled={buttonRegistrarText == "Registrando..."}
        type="text"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
      />
      <h2>Cor</h2>
      <input
        placeholder="Defina a cor..."
        disabled={buttonRegistrarText == "Registrando..."}
        type="text"
        value={cor}
        onChange={(e) => setCor(e.target.value)}
      />
      <h2>Valor</h2>
      <input
        placeholder="Informe o valor..."
        disabled={buttonRegistrarText == "Registrando..."}
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <h2>Status</h2>
      <select
        disabled={buttonRegistrarText == "Registrando..."}
        value={status}
        onChange={(e) => setStatus(e.target.value)}>
        <option value="Em trânsito">Em trânsito</option>
        <option value="Em estoque">Em estoque</option>
        <option value="Sem estoque">Sem estoque</option>
      </select>
      <br></br>
      <button onClick={createMoto} disabled={buttonRegistrarText == "Registrando..."}>
        {buttonRegistrarText}
      </button>
    </div>
  );
};

export default NovaMoto;
