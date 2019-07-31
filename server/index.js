var express = require('express')
var app = express()

app.use(express.static('./public/dist'))

app.get('/gifts', (req, res) => {
  res.json([{id: 1, gift: 'tesla'}, {id:2, gift: 'food'}, {id:3, gift: 'sleep'}])
})

app.listen(3000, () => { console.log('App listening on port 3000.')})