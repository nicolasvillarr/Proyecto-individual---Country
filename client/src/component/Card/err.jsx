import React from "react"
import estilo from './card.module.css'
import { useDispatch } from "react-redux";
import { getCountry } from "../../redux/actions";
import {  useHistory } from "react-router-dom"
export default function Error() {
    const img = 'https://i.pinimg.com/736x/96/7b/e6/967be6ebf8fe6a1311810382948dc5b1.jpg'
    const dispatch = useDispatch()
    const history = useHistory()
    function handlerst(e) {
        e.preventDefault();
        dispatch(getCountry())
        history.push('/home')
    }
    return (

        <div className={estilo.err} onClick={handlerst}>
        <div>
         <div className={estilo.errStr}>

         <h2>No coincide la busqueda</h2>
         </div>
         <div>
         <img 
         src={img}
         width='100px' height='100px' alt="img"  /> 
         </div>
         <button className={estilo.errbtn} onClick={handlerst} >volver</button>
        </div>
     </div>

     )  
}