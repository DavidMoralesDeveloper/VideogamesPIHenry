import {useEffect} from "react";
import style from "./Detail..module.css";

import { useSelector, useDispatch } from "react-redux";
import { getGameById } from "../../redux/actions";
import {useParams} from 'react-router-dom'

const Detail = () => {
  const {id} = useParams()
  const videogame = useSelector(state=>state.videogameDetail)
  console.log(videogame)

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getGameById(id))
  },[id])

  return (
    <>
    
      <div className={style.contenedorFinal}>
        <div className={style.card}>
          <img
            className={style.imgBackground}
            src={videogame.image}
            alt={videogame.name}
          />
          <div className={style.conteiner}>
            <div className={style.imgconteiner}>
              <img
                className={style.img}
                src={videogame.image}
                alt={videogame.name}
              />
            </div>
            <div className={style.info}>
              <div className={style.infoname} > <h1>{videogame.name}</h1> </div>
              <div className={style.infodescription} > <h3>Description</h3> <p>{videogame.description}</p> </div>
            
              <div className={style.infoextraUl}>
                <div  className={style.tres}>
                  <h3>Genres:</h3>
                {/* <ul>
                {videogame.genres.map((genre) => (
                  <li>{genre}</li>
                ))}
              </ul> */}
                </div>
                <div  className={style.cuatro}>
                <h3>Platforms:</h3>
                {/* <ul>
                {videogame.platforms.map((platform) => (
                  <li>{platform}</li>
                ))}
              </ul> */}
                </div>
              
              </div>
              

              <div className={style.infoextra}>
                <div className={style.uno}>
                   <h4>Released : <br/> {videogame.released}</h4>
                   </div>
                <div className={style.dos}>
                  <h3>Rating : <br/> {videogame.rating}</h3>
                  </div>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
