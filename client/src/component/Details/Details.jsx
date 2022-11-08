import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { countryDetails } from "../../redux/actions";
import estilo from './details.module.css'

export default function Details(props) {
const history = useHistory()
// console.log(props.match.params.id)
const id = props.match.params.id
const dispatch = useDispatch()

 useEffect(()=>{
    dispatch(countryDetails(id))
},[dispatch])


const detailsCountry = useSelector(state => state.countryID) 

if(!detailsCountry) {
    alert('nop')
    history.goBack() 
}

const img = 'https://i.pinimg.com/736x/96/7b/e6/967be6ebf8fe6a1311810382948dc5b1.jpg'



const activities = detailsCountry.activities?.map(e => {
    return {
        name: e.name,
        difficulty: e.difficulty,
        duration: e.duration,
        season: e.season
    } 
}) 

console.log(activities, 'actividadesnashis')


    return(

<div>
<div className={estilo.cont}>
        
  
    {
                detailsCountry.length !== null || undefined  ? 

            <div>
                <div>
                    <h3>Nombre del pais: {detailsCountry.name}</h3>
                            <img width='100px' height='70px' src={detailsCountry.image} alt='img'/>
                                <h5 className={estilo.str}>Contiente: {detailsCountry.continent}</h5>
                            <h5 className={estilo.str}>Subregion: {detailsCountry.subregion}</h5>
                        <h5 className={estilo.str}>Area: {detailsCountry.area} km2 </h5>
                    <h5 className={estilo.str}>Poblacion: {detailsCountry.population} habiantes</h5>
                    <h5 className={estilo.str}>Capital: {detailsCountry.capital}</h5>
                    <h5 className={estilo.str}>Id: {detailsCountry.id}</h5>
                </div>
                
                <div className={estilo.contAct}>
                 
                { activities?.length > 0 ? activities.map(e => {
                    return (
                        
                        <div className={estilo.act}>
                        <h4 className={estilo.strAct}>Activivdad: {e.name}</h4>
                        <p className={estilo.strAct}>difficultad: {e.difficulty}</p>
                        <p className={estilo.strAct}>Temporada: {e.season}</p>
                        <p className={estilo.strAct}>Duracion: {e.duration}hr</p>
                        </div>    
                           
                        )
                    }) 
                    : <div className={estilo.sinAct}>
                    <h3 className={estilo.str}>Sin actividad</h3>
                    <img src={img} width='100px' height='100px' alt='sin actividad'/>       
                    </div> 
                }
                    </div>
            </div>
                    :<h3>cargando...</h3> 
        }
      <Link to={'/home'}> <button >Volver</button></Link>
        </div>
    </div>
    
        
    )
}