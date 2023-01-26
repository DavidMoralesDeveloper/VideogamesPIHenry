import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ name, image, genres,id }) => {
  // const listItems = genres?.map((genre) => <li key={id}>{genre}</li>);
  
  return (
    <>
      <div  className={style.card}>
        <div key={id} className={style.conteiner}>
          <div className={style.links}>
            <Link to={`/videogames/${id}`}>
              <img src={image} alt="Fotos" className={style.videogameImg} />
              <h2 className={style.itemsName}> {name} </h2>
            </Link>
          </div>

          <div className={style.itemsgenres}>
            <h3> Genres</h3>
            {/* <ul className={style.itemsGenres}> {listItems} </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
