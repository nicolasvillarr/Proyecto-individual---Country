import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createActivity, getActity, getCountry } from "../../redux/actions";
import estilo from "./activities.module.css";
export default function Activity() {
  const dispatch = useDispatch();
  const history = useHistory();

  const country = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getActity());
    dispatch(getCountry());
  }, [dispatch]);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [errors, setErrors] = useState({});
  function validador(input) {
    let errors = {};
    if (!input.name) errors.name = "se requiere un nombre";
    else if (input.difficulty < 0)
      errors.difficulty = "solamente numeros positivos";
    else if (input.duration < 0)
      errors.duration = "solamente numeros positivos";
    else if (!input.season || input.season === "")
      errors.season = "falto temporada";
    else if (!input.country.length || input.season === [])
      errors.country = "falto pais";
    return errors;
  }
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleCrate(e) {
    console.log(e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validador({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleSeason(e) {
    console.log(e.target.value);
    setInput({
      ...input,
      season: e.target.value,
    });
  }
  //////////////////////////////////////////////////////////////////////

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !input.name ||
      !input.season ||
      !input.difficulty ||
      !input.duration ||
      !input.country.length
    ) {
      alert("Formulario incompleto");
    } else {
      if (input.difficulty <= 0 || input.difficulty >= 6) {
        alert("la dificultad tiene que ser mayor a 0 y menor a 5");
      } else if (input.duration <= 0 || input.duration >= 25) {
        alert("la duracion tiene que ser mayor a 0 y menor a 24");
      } else {
        dispatch(createActivity(input));
        setInput({
          name: "",
          difficulty: 0,
          duration: 0,
          season: "",
          country: [],
        });
        alert("la actividad se creo con exito!");
        history.push("/home");
      }
    }
  }
  //////////////////////////////////////////////////////////////////////

  function handleSelectCountry(e) {
    if (input.country.includes(e.target.value)) {
      alert(`${e.target.value} ya esta puesto `);
    } else if (input.country.length > 9) {
      alert("no podes agregar más de 10 paises🥺");
    } else {
      console.log(input);
      setInput({
        ...input,
        country: [...input.country, e.target.value], // guardo en el array para que no agarre solo un valor
      });
    }
  }
  //////////////////////////////////////////////////////////////////////

  function deleteCountry(c) {
    console.log(c);
    setInput({
      ...input,
      country: input.country.filter((x) => x !== c),
    });
  }
  //////////////////////////////////////////////////////////////////////

  return (
    <div className={estilo.cont}>
      <div>
        <Link to={"/home"}>
          <button className={estilo.btnVolver}>Volver</button>
        </Link>
        <h1 className={estilo.str}> Acá vas a poder crear tu actividad! </h1>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label className={estilo.str}>Que actividad hacemos?</label>
              <input
                className={estilo.select}
                type="text"
                value={input.name}
                name="name"
                onChange={(e) => handleCrate(e)}
              ></input>{errors.name && <div>{errors.name}</div>}
              
            </div>

            <div>
              <label className={estilo.str}>Dificultad</label>
              <input
                className={estilo.select}
                placeholder="Min 1 / Max 5"
                type="number"
                value={input.difficulty}
                name="difficulty"
                onChange={(e) => handleCrate(e)}
              ></input>
              {errors.difficulty && <div>{errors.difficulty}</div>}
            </div>

            <div>
              <label className={estilo.str}>Duración en horas</label>
              <input
                className={estilo.select}
                placeholder="Min 1 / Max 24"
                type="number"
                value={input.duration}
                name="duration"
                onChange={(e) => handleCrate(e)}
              ></input>
              {errors.duration && <div>{errors.duration}</div>}
            </div>

            <div></div>
            <div>
              <label className={estilo.str}>Temporada</label>

              <select
                className={estilo.select}
                onChange={(e) => handleSeason(e)}
              >
                <option value="">Temporada</option>
                <option value="Verano">Verano</option>
                <option value="Invierno">Invierno</option>
                <option value="Otoño">Otoño</option>
                <option value="Primavera">Primavera</option>
              </select>
            </div>
            {errors.season && <div>{errors.season}</div>}

            <label className={estilo.str}>Seleciona un pais</label>

            <select
              className={estilo.select}
              onChange={(e) => handleSelectCountry(e)}
            >
              {country?.map((e) => {
                return (
                  <option type="submit" value={e.name} key={e.name}>
                    {e.name}
                  </option>
                );
              })}
            </select>

            <div>
              {" "}
              {input.country.map((e) => {
                return (
                  <div className={estilo.str}>
                    {e}

                    <button
                      type="button"
                      key={e}
                      onClick={() => deleteCountry(e)}
                    >
                      🚮
                    </button>
                  </div>
                );
              })}
            </div>
            {errors.country ? <div>{errors.country}</div> : <></>}
            <button className={estilo.btn} type="submit">
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
