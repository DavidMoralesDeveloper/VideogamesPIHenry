import React from "react";
import style from "./Paginado.module.css";

const Paginado = () => {
  
 

  return (
    // <div className={style.paginado}>
    //   {pageNumbers &&
    //     pageNumbers.map((number) => (
    //       <button
    //        key={number}
    //         className={style.esilo}
    //         onClick={() => paginado(number)}>
    //         {number}
    //       </button>
    //     ))}
    // </div>
    <div className={style.paginado}>
    <div >
        <button className={style.esilo}>1</button>
    </div>
    <div >
        <button className={style.esilo}>2</button>
    </div>
    <div >
        <button className={style.esilo}>3</button>
    </div>
    <div >
        <button className={style.esilo}>4</button>
    </div>
    <div >
        <button className={style.esilo}>5</button>
    </div>
    <div >
        <button className={style.esilo}>6</button>
    </div>
    <div >
        <button className={style.esilo}>7</button>
    </div>
</div>
  );
};

export default Paginado;


