import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountry } from "../../redux/actions";
import estilo from './inicio.module.css'

export default function Inicio() {
    const dispatch = useDispatch()
    useEffect(()=>{ // estado de vida de un componentes
        dispatch(getCountry())
    },[dispatch])
    return (
      <div>
          <h1 className={estilo.titulo}> 🌐APPAIS🌐 </h1>
          <Link to={"/home"}>
            <h3 className={estilo.btn}> GO! </h3>
          </Link>
        </div>
    );
}