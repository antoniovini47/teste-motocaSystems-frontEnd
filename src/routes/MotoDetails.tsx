import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";
import { db } from "../firebase";
import { message } from "antd";
import { doc, setDoc, getDoc } from "firebase/firestore";

const MotoDetails = () => {
  const { id } = useParams<{ id?: string }>();

  const navigate = useNavigate();

  const [buttonSalvarAlteracoes, setButtonSalvarAlteracoes] = useState("+ Registrar");
  const [codigo, setCodigo] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [valor, setValor] = useState("");
  const [status, setStatus] = useState("Em trânsito");

  useEffect(() => {
    if (!id) {
      message.error("ID da moto não informado!", 4);
      return;
    }
    const motoRef = doc(db, "motos", id);

    getDoc(motoRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        setCodigo(id.toString());
        setModelo(docSnapshot.data().modelo);
        setCor(docSnapshot.data().cor);
        setValor(docSnapshot.data().valor);
        setStatus(docSnapshot.data().status);
      } else {
        message.error("Moto não encontrada!", 4);
      }
    });
  }, [id]);

  async function editMoto() {
    console.log("Registrando moto...");

    if (codigo === "" || modelo === "" || cor === "" || valor === "" || status === "") {
      message.info("Por favor, preencha todos os campos!", 4);
      return;
    }
    setButtonSalvarAlteracoes("Registrando...");

    await setDoc(doc(db, "motos", codigo), {
      modelo: modelo,
      cor: cor,
      valor: valor,
      status: status,
    })
      .then(() => {
        message.success("Moto registrada com sucesso!", 4);
        return navigate("/TabelaMotos");
      })
      .catch((error) => {
        message.error("Erro ao registrar moto: " + error.toString(), 4);
        setButtonSalvarAlteracoes("+ Registrar");
      });
  }

  return (
    <div className="form">
      <h1>Preencha as informações abaixo para altear a Moto {id} 🏍</h1>
      <h2>Código</h2>
      <input
        disabled={true}
        type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <h2>Modelo</h2>
      <input
        disabled={buttonSalvarAlteracoes == "Registrando..."}
        type="text"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
      />
      <h2>Cor</h2>
      <input
        disabled={buttonSalvarAlteracoes == "Registrando..."}
        type="text"
        value={cor}
        onChange={(e) => setCor(e.target.value)}
      />
      <h2>Valor</h2>
      <input
        disabled={buttonSalvarAlteracoes == "Registrando..."}
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <h2>Status</h2>
      <select
        disabled={buttonSalvarAlteracoes == "Registrando..."}
        value={status}
        onChange={(e) => setStatus(e.target.value)}>
        <option value="Em trânsito">Em trânsito</option>
        <option value="Em estoque">Em estoque</option>
        <option value="Sem estoque">Sem estoque</option>
      </select>
      <br></br>
      <button onClick={editMoto} disabled={buttonSalvarAlteracoes == "Alterando..."}>
        {buttonSalvarAlteracoes}
      </button>
    </div>
  );
};

export default MotoDetails;
