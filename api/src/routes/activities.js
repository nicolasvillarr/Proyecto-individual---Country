const { Router } = require ('express');
const { Country, Activity } = require('../db');
const router = Router()

router.post('/', async (req, res) => {
    console.log('act')
    const { name, difficulty, duration, season, country } = req.body;
    try {
        let actividades = await Activity.create({name, difficulty, duration, season})

        let activitadPais = await Country.findAll({
            where: {name : country},
        }
        )
        // console.log(activitadPais, 'ACTPAIS')
        actividades.addCountry(activitadPais)
        // console.log(actividades,' ACTIVIDADESSS')
res.status(200).send('la actividad se creo correctamente')
    } catch (error) {
        console.log(error, 'wa ja ja ')
    }
})

//put es por id y Activity.update, con body
//destroy es por id y Activity.destroy, sin body



module.exports = router