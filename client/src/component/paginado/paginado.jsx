import React from "react";
import estilo from './paginado.module.css'
export default function Paginado({countyForPage, allCountry, paginado}) {
    
    const numPag = []

    for (let i = 1; i <= Math.ceil(allCountry/countyForPage); i++) {
        numPag.push(i)    
    }

    return(  
            <div >
                {   
                    numPag?.map(num =>(
                        <div className={estilo.cont} key={num} >
                        <button className={estilo.btn} onClick={()=> paginado(num)}>{num}</button>
                        </div>
                        
                        
                    ))
                }
            </div>

    )
}
