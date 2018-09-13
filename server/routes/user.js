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

module.exports = router 