import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import {useSelector} from 'react-redux'

const CardsContainer = () => {


  const videGames = useSelector(state=>state.videogames)
  console.log(videGames)
  //estamirando al estado global
  
  return (
    <div className={style.container}>
      {videGames.map((videoGame) => {
        return (
          <Card
            id={videoGame.id}
            image={videoGame.image}
            name={videoGame.name}
            genres={videoGame.genres}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
