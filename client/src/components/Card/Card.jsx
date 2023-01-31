import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ name, image, genres, id, }) => {
  return (
    <>
      <div  className={style.card}>
        <div  className={style.conteiner}>
          <div className={style.links}>
            <Link to={`/videogames/${id}`}>
              <img src={image} alt="Fotos" className={style.videogameImg} />
              <h2 className={style.itemsName}> {name} </h2>
            </Link>
          </div>

          <div className={style.itemsgenres}>
            <h3> Genres</h3>
            <ul>
              {
              genres && genres.map((genre) => 
              <li key={genre}> {genre} </li>)
              } 
              </ul>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
