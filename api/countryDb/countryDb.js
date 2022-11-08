const axios = require('axios')
const { Country } = require ('../src/db');

// Treaemos de la api y lo metemos a la db 
async function db() {

    const allCountries = []
    if(!allCountries.length)
    {
    const api = await axios.get('https://restcountries.com/v3/all')
    const dataApi = api.data.map((e) => {
        return {
            id: e.cca3,
            name: e.name.common,
            image: e.flags[0],
            continent: e.continents[0],
            capital: e.capital ? e.capital[0] : 'no se hallo la capital',
            subregion:e.subregion ? e.subregion : 'no se hallo la subregion',
            area: e.area,
            population: e.population,
        }
    })

    // console.log(dataApi) //={}
   await Country.bulkCreate(dataApi);
    console.log('Base de datos cargada :D')

    // console.log(allCountries)
    }
}

module.exports = {db};