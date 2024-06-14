import "../App.css";

const NovaMoto = () => {
  return (
    <div className="form">
      <h1>Preencha as informações abaixo para registrar uma Moto 🏍</h1>
      <h2>Código</h2>
      <input type="text" />
      <h2>Modelo</h2>
      <input type="text" />
      <h2>Cor</h2>
      <input type="text" />
      <h2>Valor</h2>
      <input type="text" />
      <h2>Status</h2>
      <select>
        <option value="emTransito">Em trânsito</option>
        <option value="emEstoque">Em estoque</option>
        <option value="semEstoque">Sem estoque</option>
      </select>
      <button>Registrar</button>
    </div>
  );
};

export default NovaMoto;
