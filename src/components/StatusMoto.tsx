function StatusMoto(props: { statusMoto: string }) {
  const getBackgroundColor = (status: string) => {
    switch (status) {
      case "Em trânsito":
        return "#544146";
      case "Em estoque":
        return "#354546";
      case "Sem estoque":
        return "#55304C";
      default:
        return "#3badfb";
    }
  };
  const getTextColor = (status: string) => {
    switch (status) {
      case "Em trânsito":
        return "yellow";
      case "Em estoque":
        return "#56CA00";
      case "Sem estoque":
        return "#FF4C51";
      default:
        return "#fff";
    }
  };

  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(props.statusMoto),
        width: "150px",
        textAlign: "center",
        borderRadius: "35px",
      }}>
      <h4
        style={{
          fontSize: "15px",
          color: getTextColor(props.statusMoto),
        }}>
        {props.statusMoto}
      </h4>
    </div>
  );
}

export default StatusMoto;
