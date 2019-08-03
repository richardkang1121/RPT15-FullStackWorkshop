const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('./public/dist'))
app.use(express.urlencoded())

let arr = []

app.get('/find', (req, res) => {
  res.send(arr);
})

app.post('/add', (req, res) => {
  arr.push(req.body)
  res.send(arr);
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}.`)
})