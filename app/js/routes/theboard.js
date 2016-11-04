var express = require('express')
var router = express.Router()

// theboard, this is the place where the
router.get('/', function (req, res) {
  res.send('Welcome to The Monster Board.')
})

// define the about route
router.get('/recruit', function (req, res) {
  res.send('Need more Monsters I see?')
})

module.exports = router