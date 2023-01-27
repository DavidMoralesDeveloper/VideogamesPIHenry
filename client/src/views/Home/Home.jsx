import {useEffect, useState} from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import FilterBar from "../../components/FilterBar/FilterBar";
import Paginado from "../../components/Paginado/Paginado";
import { useDispatch } from "react-redux";
import { getGames,getGenres,filterVideogamesByGenre } from "../../redux/actions";

const Home = () => {
  //cunado se monta HOME que haga dispatch getGames

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getGames())
    dispatch(getGenres())
  },[])

  const [order, setOrder] = useState('')//filtro

  function handleFilterGenre(event){
    event.preventDefault();    
    dispatch(filterVideogamesByGenre(event.target.value));    
    setOrder(event.target.value);
    console.log(order)
    };

  return (
    <>
      <FilterBar handleFilterGenre={handleFilterGenre} />
      
      <CardsContainer />
    </>
  );
};

export default Home;
