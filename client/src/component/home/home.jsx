import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Card from "../Card/card"
import SearchBar from "../searchBar/searchBar"
import { filtroAZ, fitlroPopulation, filtroContinent, getActity, getCountry, filtroActivity }  from "../../redux/actions";
import Paginado from "../paginado/paginado"
import estilo from './home.module.css'
import earth from "./earth.gif"
export default function Home() {

const dispatch = useDispatch()

const activity = useSelector(state => state.activity)

const [, setOrden] = useState()


useEffect(()=>{ 
    dispatch(getCountry())
},[dispatch])

useEffect(()=>{
    dispatch(getActity())
},[dispatch])


const allCountry = useSelector(state => state.country)

//////////////////////////////////////////////////////////////////////


const [actualPage, setAcutalPage] = useState(1)

const [countyForPage] = useState(10)




const iFirstPage = actualPage * countyForPage;
const iLastPage = iFirstPage - countyForPage; 

var pagPais = allCountry.slice(iLastPage,iFirstPage);


function paginado (numPages) {
    setAcutalPage(numPages)
}
//////////////////////////////////////////////////////////////////////

function handleRst(e) {
    e.preventDefault();
    dispatch(getCountry())
}

//////////////////////////////////////////////////////////////////////

function handleOrdenAZ(e) {
    e.preventDefault()
    dispatch(filtroAZ(e.target.value))
    setOrden(e.target.value)
    setAcutalPage(1)
}


function handleOrdenPopulation(e) {
    e.preventDefault()
    dispatch(fitlroPopulation(e.target.value))
    setOrden(e.target.value)
    setAcutalPage(1)
}
//////////////////////////////////////////////////////////////////////

function handleFlitoContinent(e) {
    e.preventDefault()
    dispatch(filtroContinent(e.target.value))
    setOrden(e.target.value)
    setAcutalPage(1)
}


function handleFiltroAct(e) { 
    e.preventDefault()
    dispatch(filtroActivity(e.target.value))    
    setOrden(e.target.value)
    setAcutalPage(1)
}

//////////////////////////////////////////////////////////////////////
    return(
        <div>
        <nav className={estilo.nav}>

<div className={estilo.orden}>

  <div onClick={(e)=>handleRst(e)} className={estilo.inicio}>
  <img
     alt='inicio' 
     src={earth} 
     width='50px' height='50px'
    />
    <div className={estilo.btninicio}>Inicio</div>
    </div>
</div>

<div className={estilo.orden}>
<Link to={'/activity'}><button  className={estilo.btn}>Crear actividad</button></Link>
</div>
        {/* Filtros */}

        <div className={estilo.orden}>
<h5> Orden alfabatico</h5>
        <button className={estilo.btn} onClick={(e)=>handleOrdenAZ(e)} value='asc'>a-z</button>
        <button className={estilo.btn} onClick={(e)=>handleOrdenAZ(e)} value='dec'>z-a</button>
        </div>
<div className={estilo.orden}>

<h5> Orden por población</h5>
        <button className={estilo.btn} onClick={(e)=>handleOrdenPopulation(e)} value='mayor'>Mayor</button>
        <button className={estilo.btn} onClick={(e)=>handleOrdenPopulation(e)} value='menor'>Menor</button>
</div>

    <div className={estilo.orden}>

<h5>Actividades</h5>
    <select className={estilo.select}  onChange={e=> handleFiltroAct(e)}>
<option  value='all'>Todos los paises</option>

{
    activity.map((e) => {
                    return (
                      <option value={e.name} key={e.id}>
                        {e.name}
                      </option>
                    );
                  })             
}

</select>

</div>
<div  className={estilo.orden}>
<h5>Contientes</h5>
           <select className={estilo.select}  onChange={(e)=> handleFlitoContinent(e)}>
                        <option value='all' >Todos los continentes</option>
                        <option value='Europe' >Europa</option>
                        <option value='Asia' >Asia</option>
                        <option value='Oceania'>Oceania</option>
                        <option value='Africa' >Africa</option>
                        <option value='South America' >Sudamérica</option>
                        <option value='North America' >Norteamérica </option>
                        <option value='Antarctica' >Antártida</option>
        </select> 
</div>
   </nav>
<div className={estilo.orden}>
                <Paginado
                countyForPage={countyForPage}
                allCountry={allCountry.length}
                paginado = {paginado}/>
</div>


    
<div>
        <SearchBar setAcutalPage={setAcutalPage}/>
</div>    


        { 
            pagPais?.length ? 
            pagPais.map(({id, name, image, continent}) => {
            return (
                <div key={id} className={estilo.card}>
                <Link to={`/home/${id}`}>
                <Card       
                    name={name}
                    image={image}
                    continent={continent}
                />
                </Link>
                </div>
            )
        })
        : <img src={img} alt='cargando'/> 
        }

        </div>
    )
}
const imgInicio = 'http://www.clipartbest.com/cliparts/9ip/o4E/9ipo4E7pT.gif'
const img = 'https://images.squarespace-cdn.com/content/v1/54de9768e4b0cc0f085d7d8b/1425863958489-OF26RUZS9PP9R59KPTI1/earth_spin.gif?format=500w'