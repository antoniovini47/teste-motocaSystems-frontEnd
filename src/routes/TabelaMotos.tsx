import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  //QuerySnapshot,
  //orderBy,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase";

const TabelaMotos = () => {
  const [motos, setMotos] = useState<{ data: DocumentData }[]>([]);

  useEffect(() => {
    const q = query(collection(db, "motos"));
    onSnapshot(q, (querySnapshot) => {
      setMotos(
        querySnapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div>
      <h1>Tabela de Motos</h1>
      {motos.map((moto) => (
        <div>
          <p>Código: {moto?.data?.codigo}</p>
          <p>Modelo: {moto?.data?.modelo}</p>
          <p>Cor: {moto?.data?.cor}</p>
          <p>Status: {moto?.data?.status}</p>
          <p>Valor: R$ {moto?.data?.valor}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export default TabelaMotos;
