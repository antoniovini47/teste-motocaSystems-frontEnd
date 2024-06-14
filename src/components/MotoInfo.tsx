function MotoInfo(props: {
  codigoMoto: String;
  modeloMoto: String;
  valorMoto: String;
  corMoto: String;
  statusMoto: String;
}) {
  return (
    <div>
      <h1>Código: {props.codigoMoto}</h1>
      <h1>Modelo: {props.modeloMoto}</h1>
      <h1>Valor: {props.valorMoto}</h1>
      <h1>Cor: {props.corMoto}</h1>
      <h1>Status: {props.statusMoto}</h1>
      <hr></hr>
    </div>
  );
}

export default MotoInfo;
