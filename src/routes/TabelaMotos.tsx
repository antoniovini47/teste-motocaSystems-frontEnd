import { useEffect, useState } from "react";
import { collection, onSnapshot, query, DocumentData, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import MotoInfo from "../components/MotoInfo";

const TabelaMotos = () => {
  const [motos, setMotos] = useState<{ id: String; data: DocumentData }[]>([]);
  const [orderedByFilter, setOrderedByFilter] = useState<String>("status");
  const [searchFilter, setSearchFilter] = useState<String>("");

  useEffect(() => {
    const q = query(collection(db, "motos"), orderBy(orderedByFilter.toString()));
    onSnapshot(q, (querySnapshot) => {
      setMotos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [orderedByFilter]);

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          gap: "10px",
        }}>
        <select
          onChange={(e) => {
            setOrderedByFilter(e.target.value);
          }}>
          <option value="modelo">Organizar por...</option>
          <option value="valor">Valor</option>
          <option value="modelo">Modelo</option>
          <option value="cor">Cor</option>
          <option value="status">Status</option>
        </select>
        <input
          onChange={(e) => {
            setSearchFilter(e.target.value);
          }}
          placeholder="Buscar motos..."
          style={{
            flex: 1,
          }}></input>
      </div>
      {motos
        .filter(
          (moto) =>
            moto.data.modelo.toLowerCase().includes(searchFilter.toLowerCase()) ||
            moto.data.cor.toLowerCase().includes(searchFilter.toLowerCase()) ||
            moto.data.status.toLowerCase().includes(searchFilter.toLowerCase()) ||
            moto.data.valor.toLowerCase().includes(searchFilter.toLowerCase()) ||
            moto.id.toLowerCase().includes(searchFilter.toLowerCase())
        )
        .map((moto) => (
          <MotoInfo
            codigoMoto={moto?.id}
            modeloMoto={moto?.data?.modelo}
            valorMoto={moto?.data?.valor}
            corMoto={moto?.data?.cor}
            statusMoto={moto?.data?.status}
          />
        ))}
    </>
  );
};

export default TabelaMotos;
