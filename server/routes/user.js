let router = require('express').Router()
let Users = require('../models/user')

router.put('/edit', (req, res) => {
  Users.findByIdAndUpdate(req.params._id, req.body)
    .then(() => {
      res.send({
        message: "Profile Image Updated!"
      })
    })
})