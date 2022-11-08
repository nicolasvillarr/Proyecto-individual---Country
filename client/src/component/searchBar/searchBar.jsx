import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../redux/actions";
import estilo from  './searchBar.module.css'

export default function SearchBar({setAcutalPage}) {
    const dispatch = useDispatch()

    const [name, setName] = useState('')


    function handleSearch(e) {
        // console.log(e.target.value)
        e.preventDefault()
            setName(e.target.value)
        
    }
    
    function handleBtn(e) {
        e.preventDefault()
        if(!name){
            alert('falto poner un nombre :p') 
        }else {
            dispatch(searchCountry(name))
            setAcutalPage(1)
            }
        setName('')
    }


    return (
        <div  className={estilo.cont}>
        <input 
        className={estilo.searchBar}
        placeholder="Buscar" 
        type="text" 
        value={name}
        onChange={(e)=> handleSearch(e)}
         /> 
         <button type="submit" className={estilo.btn} onClick={(e)=> handleBtn(e)}>🔎</button> 
        </div>
    ) 
}