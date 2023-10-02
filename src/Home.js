import React from "react";

const Home = () => {
  const estiloHome = {
    color: "blue",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "24px"
  };

  return (
    <div>
      <h2 style={estiloHome}>Pagina Inicial</h2>
      <p style={estiloHome}>Boas Vindas a Pagina inicial</p>
    </div>
  );
};

export default Home;
