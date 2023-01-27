// import {useState} from "react";
import { useSelector } from "react-redux";
import SerchBar from "../SerchBar/SerchBar";
import style from "./FilterBar.module.css";

const FilterBar = ({handleFilterGenre}) => {
  const genres = useSelector((state) => state.genres);

  return (
    <div className={style.container}>
      <div className={style.butons}>
        
        <SerchBar />
        <button className={style.buttonFilterNav}  >RESET FILTERS</button>
      </div>

      <div className={style.filterBar}>
        {/* Genres hace map */}
        <select className="genres"  onChange={(e) => handleFilterGenre(e)}>
          <option value="genres">Genres</option>
          {genres.map((genre) => (
                        <option key={genre.name} value={genre.name}>
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

        {/* alfabétic */}
        <select className="alphabet">
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
