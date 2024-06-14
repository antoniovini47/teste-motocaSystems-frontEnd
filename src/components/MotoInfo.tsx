import { useState } from "react";
import "./MotoInfo.css";
import StatusMoto from "./StatusMoto";
import imgTrashOutline from "../assets/trash-outline.svg";
import imgTrash from "../assets/trash.svg";
import imgEye from "../assets/eye.svg";
import imgEyeOutline from "../assets/eye-outline.svg";
import imgLoading from "../assets/refresh-circle.svg";
import { message } from "antd";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

function MotoInfo(props: {
  codigoMoto: String;
  modeloMoto: String;
  valorMoto: String;
  corMoto: String;
  statusMoto: String;
}) {
  const [imgButtonDelete, setImgButtonDelete] = useState(imgTrashOutline);
  const [imgButtonEdit, setImgButtonEdit] = useState(imgEyeOutline);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteMoto = async () => {
    setIsDeleting(true);
    setImgButtonDelete(imgLoading);

    const motoRef = doc(db, "motos", props.codigoMoto.toString());

    await deleteDoc(motoRef)
      .then(() => {
        setIsDeleting(false);
        message.success("Moto excluída com sucesso!", 4);
      })
      .catch((error) => {
        setIsDeleting(false);
        message.error("Erro ao excluir moto: " + error.toString(), 4);
      });
  };

  return (
    <div className="motoInfoContainer">
      <h3 className="textCodigo">#{props.codigoMoto}</h3>
      <StatusMoto statusMoto={props.statusMoto.toString()} />
      <div className="motoInfoData">
        <h4>{props.modeloMoto}</h4>
        <h5>Valor: R$ {props.valorMoto}</h5>
        <h5>Cor: {props.corMoto}</h5>
      </div>
      <div className="motoInfoButtons">
        <button
          style={{ color: "white" }}
          onMouseEnter={() => (isDeleting ? null : setImgButtonDelete(imgTrash))}
          onMouseLeave={() => (isDeleting ? null : setImgButtonDelete(imgTrashOutline))}
          onClick={deleteMoto}>
          <img
            src={isDeleting ? imgLoading : imgButtonDelete}
            alt="Excluir"
            style={isDeleting ? { animation: "spin 1s linear infinite" } : {}}
          />
        </button>
        <button
          onClick={() => (window.location.href = `/tabelaMotos/${props.codigoMoto}`)}
          style={{ color: "white" }}
          onMouseEnter={() => (isDeleting ? null : setImgButtonEdit(imgEye))}
          onMouseLeave={() => (isDeleting ? null : setImgButtonEdit(imgEyeOutline))}>
          <img src={imgButtonEdit} alt="Excluir"></img>
        </button>
      </div>
    </div>
  );
}

export default MotoInfo;
