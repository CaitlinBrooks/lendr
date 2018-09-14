let router = require('express').Router()
let Lends = require('../models/lend')


//POST
router.post('/', (req, res, next) => {
    // @ts-ignore
    Lends.create(req.body)
        .then(newLend => {
            console.log("routes work")
            res.send(newLend)
        })
        .catch(err => {
            console.log(err)
            next()
        })
})


module.exports = router 