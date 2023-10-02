import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tilapias = () => {
  const [numeroDeTilapias, setNumeroDeTilapias] = useState(0);

  const aumentarTilapias = () => {
    setNumeroDeTilapias(numeroDeTilapias + 1);
  };

  const estiloTilapias = {
    color: "blue",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "24px"
  };

  return (
    <div>
      <h2 style={estiloTilapias}>Tilápias</h2>
      <p style={estiloTilapias}>Número de Tilápias: {numeroDeTilapias}</p>
      <button
        onClick={aumentarTilapias}
        style={{ fontSize: "18px", padding: "5px 10px" }}
      >
        Adicionar Tilápia
      </button>

      <Link to="/" style={{ textDecoration: "none" }}>
        <button
          style={{ fontSize: "18px", padding: "5px 10px", marginTop: "20px" }}
        >
          Página Inicial
        </button>
      </Link>
    </div>
  );
};

export default Tilapias;
