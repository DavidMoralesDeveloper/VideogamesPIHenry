import React from "react";
import style from "./Paginado.module.css";

const Paginado = ({gamesPerPage, videGames, actualPage}) => {
  
    const pageNumbers = [];
    //para obtener el num de paginas divido el total de juegos entre el num de juegos por page
    const numPages = Math.ceil(videGames / gamesPerPage);
  
    for (let i = 1; i <= numPages; i++) {
      pageNumbers.push(i)//lo pusheo en pageNumbers
    }

  return (
    <div className={style.paginado}>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button
           key={number}
            className={style.esilo}
            onClick={() => actualPage(number)}>
            {number}
          </button>
        ))}
    </div>

  );
};

export default Paginado;


