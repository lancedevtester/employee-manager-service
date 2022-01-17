const express = require('express')
const cors = require("cors");
const errorHandler = require('./middleware/error-handler');

const { CreateCafe, CreateEmployee, FindCafeByLocation, FindAllEmployees } = require('./controllers')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors());

app.get('/cafes', (req, res, next) => {

  // No query, return all
  if (Object.keys(req.query).length === 0) {
    next()
  } else {
    FindCafeByLocation(req, res)
  }
  // not supported query will simple return error 
})

app.get('/cafes/employees', (req, res) => FindAllEmployees(req, res))

app.post('/cafe', (req, res) => CreateCafe(req, res))

app.post('/cafe/employee', (req, res) => CreateEmployee(req, res))

// global error handler
app.use(errorHandler);

// start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Cafes Employee Manager Server is running on port ${PORT}.`);
});