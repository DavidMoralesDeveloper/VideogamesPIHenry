import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Forms.module.css";
import { validate } from "../../helpers/validate";
import Modal from "../../components/Modal/Modal";

const Form = () => {
  // traigo los generos del global
  const genres = useSelector((state) => state.genres);
  const platformsOptions = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "PlayStation 3",
    "Xbox One",
    "Xbox Series S/X",
    "Xbox 360",
    "Xbox",
    "Nintendo Switch",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "iOS",
    "Android",
    "macOS",
    "Linux",
  ];

  const [form, setForm] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: [],
    genres: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    genres: "",
  });

  //modal
  const [estadoModal, setEstadoModal] = useState(false)

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setErrors(
      validate({
        ...form,
        [property]: value,
      })
    );

    setForm({ ...form, [property]: value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      axios
        .post("http://localhost:3001/videogames", form)
        .then((res) => console.log(res.data))
        .catch((err) => alert(err));

      setEstadoModal(!estadoModal) //aparece modal 

      setForm({
        //seteo todo mi input en cero
        name: "",
        image: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platforms: [],
      });
    } else {
      alert("ERROR: llenar los campos que falten  😕");
    }
  };

  // +++++++++++++++++++++++

  const handleGenre = (event) => {
    setForm({
      ...form,
      genres: [...new Set([...form.genres, event.target.value])],
    });
  };

  const handleDeleteGenre = (event) => {
    setForm({
      ...form,
      genres: form.genres.filter((g) => g !== event),
    });
  };

  const handlePlatform = (event) => {
    setForm({
      ...form,
      platforms: [...new Set([...form.platforms, event.target.value])],
    });
  };

  const handleDeletePlataform = (event) => {
    setForm({
      ...form,
      platforms: form.platforms.filter((g) => g !== event),
    });
  };

  return (
    <div className={style.container}>
      <form className={style.formcontainer} onSubmit={handlerSubmit}>
        <h2>Create a video game </h2>
        <div className={style.inputs}>
          <label>Nombre: </label>
          <input
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
            placeholder="Name"
            autoComplete="off"
          ></input>
          {errors.name && <p className={style.errorText}>{errors.name}</p>}
        </div>

        <div className={style.inputs}>
          <label>Descripción: </label>
          <textarea
            type="text"
            name="description"
            value={form.description}
            onChange={changeHandler}
            placeholder="Description..."
          />
          {/* {errors.description && <p className={style.errorText}>{errors.description}</p>} */}
        </div>
        <div className={style.fechaYraiting}>
          <div className={style.fecha}>
            <label>Fecha de lanzamiento: </label>
            <input
              className={style.inputfecha}
              type="date"
              name="released"
              value={form.released}
              onChange={changeHandler}
            ></input>
            {!form.released && (
              <p className={style.errorSelectText}>Select a Date</p>
            )}
          </div>

          <div className={style.rating}>
            <label>Rating: </label> <br />
            <input
              className={style.inputfechaYraiting}
              type="tel"
              name="rating"
              value={form.rating}
              onChange={changeHandler}
              maxLength="1"
              placeholder="Rate from 1 to 5"
            />
            {errors.rating && (
              <p className={style.errorSelectText}>{errors.rating}</p>
            )}
          </div>
        </div>
        {/* Plataformas**************************** */}
        <div>
          <div className={style.containergenres}>
            <div id="plataforms" className={style.genres}>
              <label>Platforms: </label> <br />
              <select onChange={handlePlatform}>
                <option value="all">All</option>
                {platformsOptions &&
                  platformsOptions.map((plataform, index) => (
                    <option key={index} value={plataform}>
                      {plataform}
                    </option>
                  ))}
              </select>
              {errors.platforms && (
                <p className={style.errorSelectText}>{errors.platforms}</p>
              )}
            </div>

            {/* delete plataform */}

            <div className={style.genresValues}>
              {form.platforms.map((platform) => (
                <div key={platform} className={style.genresvaluesdiv}>
                  <p>{platform}</p>
                  <button
                    onClick={() => handleDeletePlataform(platform)}
                    key={platform.id}
                    id={platform.id}
                    value={platform.name}
                  >
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Genero******************** */}

          <div className={style.containergenres}>
            <div className={style.genres}>
              <label>Generos: </label> <br />
              <select onChange={(event) => handleGenre(event)}>
                <option value="all">All</option>
                {genres?.map((game) => {
                  return (
                    <option key={game.id} value={game.name}>
                      {game.name}
                    </option>
                  );
                })}
              </select>
              {errors.genres && (
                <p className={style.errorSelectText}>{errors.genres}</p>
              )}
            </div>

            <div className={style.genresValues}>
              {form.genres.map((game) => (
                <div key={game} className={style.genresvaluesdiv}>
                  <p>{game}</p>
                  <button
                    onClick={() => handleDeleteGenre(game)}
                    key={game.id}
                    id={game.id}
                    value={game.name}
                  >
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={style.createDiv}>
          <button type="submit" className={style.create}>
            CREATE{" "}
          </button>
        </div>
      </form>

      <Modal 
      estado={estadoModal}
      />
    </div>
  );
};

export default Form;
