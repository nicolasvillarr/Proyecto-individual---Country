import axios from 'axios'


export function getCountry() {
    return async function (dispatch) {
        try {
            const country = await axios.get('http://localhost:3001/country')
            dispatch({
                type: 'GET_COUNTRY',
                payload: country.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function searchCountry(name){
    return async function (dispatch) {
        try {
            const country = await axios.get(`http://localhost:3001/country?name=${name}`)
                dispatch({
                    type: 'SEARCH_COUNTRY',
                    payload: country.data 
                })
            
        } catch (error) {
            dispatch({
                type: 'NO_SEARCH',
                payload: [<div></div>]
            })
            console.log(error)
        }
    }
}


export function countryDetails(id) {
    // console.log(id)
    return async function (dispatch) {
    try {
            const details = await axios.get(`http://localhost:3001/country/${id}`)
            dispatch({
                type: 'COUNTRY_DETAILS',
                payload: details.data        
            })
    } catch (error) {
            console.log(error)
        }
    }
}

export function createActivity (payload) {
    return async function (dispatch) {
        try {
            const act = await axios.post('http://localhost:3001/activity', payload)
            dispatch({
                type: 'POST_ACTIVITY',
                payload: act.data
            })            
        } catch (error) {
            console.log(error)
        }
    }
}


export function getActity () {
    return async function (dispatch) {
        try {
            const getAct = await axios.get('http://localhost:3001/getActivity')
            dispatch({
                type: 'GET_ACTIVITY',
                payload: getAct.data
            })            
        } catch (error) {
            console.log(error)
        }
    }
}

export function filtroContinent(payload) {
    return {
        type: 'FILTRO_CONTINET',
        payload
    }
}//t

export function filtroActivity(payload) {
    return {
        type: 'FILTRO_ACTIVITY',
        payload
    }
}//t


export function fitlroPopulation(payload) {
    return {
        type: 'FILTRO_POPULATION',
        payload
    }
}//t

export function filtroAZ(payload) {
    return {
        type: 'FILTRO_AZ',
        payload
    }
}//t
