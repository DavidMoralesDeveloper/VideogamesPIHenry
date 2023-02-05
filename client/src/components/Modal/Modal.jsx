import React from "react";
import style from "./Modal.module.css";
import { Link } from "react-router-dom";

const Modal = ({ estado}) => {
  return (
    <>
    {estado && 
      <div className={style.overlay}>
        <div className={style.contenedorModal}>
          <h1>El juego se a creado exitosamente</h1>
          <Link to="/home">
            <button className={style.buttonBack}>Back to Home</button>
          </Link>
        </div>
      </div>
      }
    </>
  );
};

export default Modal;
