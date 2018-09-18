let router = require('express').Router()
let Lends = require('../models/lend')


//POST
router.post('/createLend', (req, res, next) => {
    // @ts-ignore
    Lends.create(req.body)
        .then(newLend => {
            console.log("routes work")
            res.send(newLend)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

router.get('/mylends/:lendrId', (req, res, next) => {
    // @ts-ignore
    Lends.find({ "lendr.userId": req.params.lendrId })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

router.get('/myborrows/:borrowerId', (req, res, next) => {
    // @ts-ignore
    Lends.find({ "borrower.userId": req.params.borrowerId })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

router.put('/mylends/update/:lendId', (req, res, next) => {
    Lends.findById(req.params.lendId)
        .then(lend => {
            lend.borrower.returned = true
            lend.save()
            res.send("Updated Successfully")
        })
})

router.put('/myborrows/update/:lendId', (req, res, next) => {
    Lends.findById(req.params.lendId)
        .then(lend => {
            lend.lendr.lent = true
            lend.save()
            res.send("Updated Successfully")
        })
})

module.exports = router 