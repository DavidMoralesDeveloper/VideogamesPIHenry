import {useEffect} from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import FilterBar from "../../components/FilterBar/FilterBar";
import { useDispatch } from "react-redux";
import { 
  getGames,
  getGenres,
} from "../../redux/actions";

const Home = () => {
  //cunado se monta HOME que haga dispatch getGames

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getGames())
    dispatch(getGenres())
  },[])


  return (
    <>
      <FilterBar />
      
      <CardsContainer />
    </>
  );
};

export default Home;
