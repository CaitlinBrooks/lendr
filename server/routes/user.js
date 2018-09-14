let router = require('express').Router()
let Users = require('../models/user')

router.put('/edit', (req, res) => {
  Users.findByIdAndUpdate(req.body._id, req.body)
    .then(() => {
      res.send({
        message: "Profile updated successfully!"
      })
    })
})

router.get('/', (req, res, next) => {
  Users.find({ _id: req.session.uid })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

router.get('/findByName/:username', (req, res) => {
  Users.findOne({ name: req.params.username })
    .then(data => {
      res.send(data._id)
    })
})

module.exports = router 