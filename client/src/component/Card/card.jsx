import React from "react"
import estilo from './card.module.css'
import Error from "./err";
export default function Card({name, image, continent,}) {
    // console.log(name)
    if(name){
        return(
            <div className={estilo.cont}>
            <img  src={image} width='140px' height='80px' alt='bandera'/>

            <h4 className={estilo.str}>{name}</h4>            
            <div className={estilo.str}>{continent}</div>
        </div>
    )
} else {
    return (
        <Error/>
    )
}
}