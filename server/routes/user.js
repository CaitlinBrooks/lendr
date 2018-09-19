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

router.put('/rating', (req, res) => {
  Users.findById(req.body.userId)
    .then((user) => {
      user.rating.push(req.body.rating)
      user.save()
      res.send({
        message: "Updated sucessfully"
      })
    })
})

router.get('/', (req, res, next) => {
  // @ts-ignore
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

router.get('/findByNameFull/:username', (req, res) => {
  Users.findOne({ name: req.params.username })
    .then(data => {
      res.send(data)
    })
})

module.exports = router 