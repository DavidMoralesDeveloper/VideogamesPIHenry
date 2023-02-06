import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getGames,
  filterVideogamesByGenre,
  orderByName,
  orderByCreate,
} from "../../redux/actions";
import SerchBar from "../SerchBar/SerchBar";
import style from "./FilterBar.module.css";

const FilterBar = ({ handlePage }) => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  const [orden, setOrden] = useState("");
 

  const handleClickReset = (e) => {
    e.preventDefault();
    dispatch(getGames());
    // window.location.reload();
  };

  function handleFilterGenre(event) {
    dispatch(filterVideogamesByGenre(event.target.value));
  }

  function handleFilterName(event) {
    dispatch(orderByName(event.target.value));
    handlePage(1);
    setOrden(`Ordenado ${event.target.value}`)
  }

  function handleFilterCreate(event) {
    dispatch(orderByCreate(event.target.value));
  }

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

        {/* alfabétic   */}
        <select
          className="alphabet"
          onChange={(event) => handleFilterName(event)}
        >
          <option value="alphabet">All</option>
          <option value="atoz">A to Z</option>
          <option value="ztoa">Z to A</option>
        </select>

        {/* juego creado o viene de api  */}
        <select
          className="create"
          onChange={(event) => handleFilterCreate(event)}
        >
          <option value="all">Existing or Created</option>
          <option value="existing">Existing</option>
          <option value="created">Created</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
