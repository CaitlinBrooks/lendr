let router = require('express').Router()
let Users = require('../models/user')

router.put('/edit', (req, res) => {
  Users.findByIdAndUpdate(req.params.picture, req.body)
    .then(() => {
      res.send({
        message: "Profile Image Updated!"
      })
    })
})

module.exports = router 