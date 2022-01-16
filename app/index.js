const express = require('express')
const cors = require("cors");

const { CreateCafe } = require('./controllers')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors());

app.get('/cafes', (req, res, next) => {

  // no query 
  if (Object.keys(req.query).length === 0) {

    res.send({ "cafes": [] })
    console.log('No query, return all')
  } else {

    // query is 'location' 
    if (req.query.location) {

      // location is valid, check from
      if (true)
        res.send({
          "name": "Starbuck",
          "description": "",
          "employees": 10,
          "logo": "",
          "location": "",
          "id": 132
        })

      console.log('GET', req.url, ', query: ', req.query)
    }

    // not supported query will simple return error 
  }
  next()
})

app.get('/employees', (req, res, next) => {

  res.send({ "employees": [] })

  console.log('GET', req.url, ', query: ', req.query)
  next()
})

app.post('/cafe', (req, res) => CreateCafe(req, res))
// app.post('/cafe', (req, res) => {

//   console.log('POST', req.url, ', body: ', req.body)
// })

app.post('/employee', (req, res) => {


  console.log('POST', req.url, ', body: ', req.body)
})

// start the server
app.listen(8080, '127.0.0.1', console.log("Cafes Employee Manager running.. "))