import React from "react";
import { Link } from "react-router-dom";

const Sobre = () => {
  const estiloSobre = {
    color: "blue",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "24px"
  };

  return (
    <div>
      <h2 style={estiloSobre}>Sobre</h2>
      <p style={estiloSobre}>
        Está pagina diz respeito a Contagem de Tilápias.
      </p>

      <Link to="/tilapias" style={{ textDecoration: "none" }}>
        <button style={{ fontSize: "18px", padding: "5px 10px" }}>
          Contar Tilápias
        </button>
      </Link>
    </div>
  );
};

export default Sobre;
