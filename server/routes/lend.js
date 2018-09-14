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

router.get('/mylends/:lendrId', (req, res, next) => {
    // @ts-ignore
    Lends.find({ "lendr.userId": req.params.lendrId })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            next()
        })
})

router.get('/myborrows/:borrowerId', (req, res, next) => {
    // @ts-ignore
    Lends.find({ "borrower.userId": req.params.borrowerId })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            next()
        })
})


module.exports = router 