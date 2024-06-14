import { useParams, useNavigate } from "react-router-dom";

const MotoDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const handleMotoEdit = () => {
    console.log("Moto editada com sucesso!");
    return navigate("/TabelaMotos");
  };

  return (
    <div>
      <h1>Editar Moto ID: {id} </h1>
      <form onSubmit={handleMotoEdit}>
        <label>Nome:</label>
        <input type="text" />
        <label>Marca:</label>
        <input type="text" />
        <label>Modelo:</label>
        <input type="text" />
        <label>Ano:</label>
        <input type="text" />
        <label>Preço:</label>
        <input type="text" />
        <label>Descrição:</label>
        <input type="text" />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default MotoDetails;
