import { useEffect, useState } from "react";
import { collection, onSnapshot, query, DocumentData } from "firebase/firestore";
import { db } from "../firebase";
import MotoInfo from "../components/MotoInfo";

const TabelaMotos = () => {
  const [motos, setMotos] = useState<{ id: String; data: DocumentData }[]>([]);

  useEffect(() => {
    const q = query(collection(db, "motos"));
    onSnapshot(q, (querySnapshot) => {
      setMotos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div>
      {motos.map((moto) => (
        <MotoInfo
          codigoMoto={moto?.id}
          modeloMoto={moto?.data?.modelo}
          valorMoto={moto?.data?.valor}
          corMoto={moto?.data?.cor}
          statusMoto={moto?.data?.status}
        />
      ))}
    </div>
  );
};

export default TabelaMotos;
