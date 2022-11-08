const { Router } = require ('express')
const { Country, Activity } = require('../db');
const router = Router()

router.get('/', async(req, res) => {
    try {
        const activities = await Activity.findAll({
        include: 
            {model : Country,
        attributes: ['name'],
        through: {attributes: []
        }}
    
    })
    // console.log(activities)
    res.status(200).json(activities)  
    } catch (error) {
        console.log(error)
    }

})

module.exports = router