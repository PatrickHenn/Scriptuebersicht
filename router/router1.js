var express = require('express')
var router1 = express.Router()
 
// middleware that is specific to this router
router1.use(function timeLog (req, res, next) {
  console.log('Requested URI Path : ', req.url)
  next()
})
 
// define the home page route
router1.get('/', function (req, res) {
  res.send('Ich kann Nachiten versenden')
})
 
// define the about route
router1.get('/about', function (req, res) {
  res.send('die dann direkt auftauen')
})
 
module.exports = router1
