import { useState } from "react";
import {useSelector} from 'react-redux'
import Card from "../Card/Card";
import Paginado from '../Paginado/Paginado'
import style from "./CardsContainer.module.css";

const CardsContainer = () => {


  const videGames = useSelector(state=>state.videogames)
  console.log(videGames)
  //estamirando al estado global

  //Estados para el paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, /*setGamesPerPage*/] = useState(15);

  const lastIndexGame = currentPage * gamesPerPage;
  const firstIndexGame = lastIndexGame - gamesPerPage;
  const currentGames = videGames.slice(firstIndexGame, lastIndexGame); //videogames de la page actual

  const actualPage = (pageNumbers) => {
    setCurrentPage(pageNumbers)
  }
  
  return (
    <>
    <Paginado 
     gamesPerPage={gamesPerPage}
     videGames={videGames.length}
     actualPage={actualPage}
    />
    
    <div className={style.container}>    

      {currentGames.map((videoGame) => {
        return (
          <Card
            key={videoGame.id}
            id={videoGame.id}
            image={videoGame.image}
            name={videoGame.name}
            genres={videoGame.genres}
            
          />
        );
      })}
    </div>
    </>
  );
};

export default CardsContainer;
