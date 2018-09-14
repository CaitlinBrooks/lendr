let router = require('express').Router()
let Lends = require('../models/lend')


//POST
router.post('/', (req, res, next) => {
    // @ts-ignore
    req.body.userId = req.session.uid
    Lends.create(req.body)
        .then(newLend => {
            res.send(newLend)
        })
        .catch(err => {
            console.log(err)
            next()
        })
})


module.exports = router 