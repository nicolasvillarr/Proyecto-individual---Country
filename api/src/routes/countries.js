const { Router } = require('express');
const { Country, Activity } = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query
    const allCountries = await Country.findAll({
        include: Activity
    })
    if(name) {
        // let a =name.replace('Å', 'A')
        // console.log(a)
        console.log('por name')
        porName = await allCountries.filter(e => e.name.toLowerCase().startsWith(name.toLowerCase()))
        if(porName.length) {
            res.json(porName)
        } else {
            res.status(404).send('error')
            console.log('error')
        }
            } else {
                console.log('todos')
                res.json(allCountries) 
            }
        })
    

            
router.get('/:id', async (req,res) => {
    const  porId = req.params.id.toUpperCase()
    // console.log(porId)
         const countries = await Country.findOne({ 
            where: {
                id: porId,
              },
              include: Activity,
            });
            return res.json(countries)
    })

module.exports = router

