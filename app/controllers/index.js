const db = require("../models");

const Cafe = db.cafes;
const Employee = db.employees;

// SQL Opeartion to work with data
const Op = db.Sequelize.Op;

// Create a new Cafe entry
exports.CreateCafe = (req, res) => {

  // check name and description is empty
  if (!req.body.name && !req.body.description && !req.body.location) {

    // Cafe.findAll()

    res.status(400).send({
      message: "Name, description and location of cafe cannot be empty!"
    });
    return;
  }

  const cafe = {
    // non-nulls
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    // optionals
    employees: req.body.employees ? req.body.employees : 0,
    logo: req.body.logo ? req.body.logo : null,
  };

  // write into database schema, using default Sequalize CRUD create()
  Cafe.create(cafe)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Cafe."
      });
    });
};

// Retrieve all Cafes from the database.
// exports.FindAllCafes = (req, res) => {

//   // write into database schema, using default Sequalize CRUD create()
//   Cafe.create(cafe)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Cafe."
//       });
//     });
// };

exports.FindCafeByLocation = (req, res) => {

  // query is 'location' 
  if (req.query.location) {

    // return array that match 'location'
    Cafe.findAll({
      where: {
        location: req.query.location
      },

      // other conditions here ...
      order: [
        ['employees', 'DESC']
      ],

      // what to return in response
      attributes: ['name', 'description', 'employees', 'logo', 'location']
    })
      .then(data => {
        res.send(data)
        // console.log(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while finding the Cafe by location."
        });
      });
  }
};

exports.CreateEmployee = (req, res) => {

  // check name and cafe empty
  if (!req.body.name && !req.body.cafe) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const employee = {
    // non nulls
    name: req.body.name,
    cafe: req.body.cafe,
    // optionals
    days_worked: req.body.days_worked ? req.body.days_worked : 0,
  };

  // write into database schema, using default Sequalize CRUD create()
  Employee.create(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Employee."
      });
    });

};

// Retrieve all Employees, with days_worked 'DESC' order
exports.FindAllEmployees = (req, res) => {

  // no query is needed, if exist return null
  // if (req.query) return;

  Employee.findAll({

    order: [
      ['days_worked', 'DESC']
    ],
    // what to return in response
    attributes: ['name', 'days_worked', 'cafe',
      // 'id'
    ]
  })
    .then(data => {
      res.send(data)
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while finding all employees."
      });
    });

};