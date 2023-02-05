import { useState ,useEffect} from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import FilterBar from "../../components/FilterBar/FilterBar";
import { useDispatch, useSelector } from "react-redux";
import { 
  getGames,
  getGenres,
} from "../../redux/actions";
import Paginado from '../../components/Paginado/Paginado'

const Home = () => {
  //cunado se monta HOME que haga dispatch getGames

  const dispatch = useDispatch()
  const videGames = useSelector(state=>state.videogames)
  
  useEffect(()=>{
    dispatch(getGames())
    dispatch(getGenres())
  },[dispatch])

  //Estados para el paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, /*setGamesPerPage*/] = useState(15);

  const lastIndexGame = currentPage * gamesPerPage;
  const firstIndexGame = lastIndexGame - gamesPerPage;
  const currentGames = videGames.slice(firstIndexGame, lastIndexGame); //videogames de la page actual

  const actualPage = (pageNumbers) => {
    setCurrentPage(pageNumbers)
  }

  //para filter
  const handlePage = (event) => {
    setCurrentPage(event) //deberia seatear el estado

}


  return (
    <>
      <FilterBar
      handlePage={handlePage}
     
      />

      <Paginado 
     gamesPerPage={gamesPerPage}
     videGames={videGames.length}
     actualPage={actualPage}
    />

      <CardsContainer 
      currentGames={currentGames}
      />

    </>
  );
};

export default Home;
