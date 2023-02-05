import Card from "../Card/Card";
import style from "./CardsContainer.module.css";



const CardsContainer = ({currentGames}) => {

  return (
    <>
    
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
