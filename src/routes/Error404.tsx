const Error404 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
      <h1>404 - Página não encontrada</h1>
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  );
};

export default Error404;
