// import {useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getGames , filterVideogamesByGenre } from "../../redux/actions";
import SerchBar from "../SerchBar/SerchBar";
import style from "./FilterBar.module.css";

const FilterBar = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  const handleClickReset = (e) => {
    e.preventDefault();
    dispatch(getGames());
    // window.location.reload();
  };

  function handleFilterGenre(event){     
    dispatch(filterVideogamesByGenre(event.target.value));    
    };

  return (
    <div className={style.container}>
      <div className={style.butons}>
        <SerchBar />
        <button
          className={style.buttonFilterNav}
          onClick={(e) => handleClickReset(e)}
        >
          RESET
        </button>
      </div>

      <div className={style.filterBar}>
        {/* Genres hace map */}
        <select
          className="genres"
          onChange={(event) => handleFilterGenre(event)}
        >
          <option value="genres">Genres</option>
          {genres?.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>

        {/* juego creado o viene de api  */}
        <select className="create">
          <option value="all">Existing or Created</option>
          <option value="existing">Existing</option>
          <option value="created">Created</option>
        </select>

        {/* alfabétic  onChange={(event) => handleSort(event)} */}
        <select className="alphabet" >
          <option value="alphabet">Alphabet</option>
          <option value="atoz">A to Z</option>
          <option value="ztoa">Z to A</option>
        </select>

        {/* raiting */}
        <select className="raiting">
          <option value="raiting">Raiting</option>
          <option value="best">Best Raiting</option>
          <option value="worse">Worse Raitinng</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
