const db = require("../models");
const Cafe = db.cafes;
const Employees = db.employees;

// const Op = db.Sequelize.Op;

// Create and Save a new Cafe
exports.CreateCafe = (req, res) => {

  // check name and description is empty
  if (!req.body.name && !req.body.description) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const cafe = {
    name: req.body.name,
    description: req.body.description,
  };

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
exports.FindAllCafes = (req, res) => {

};

// Find a single Cafe with an id
exports.FindCafe = (req, res) => {

};

// Delete a Cafe with the specified id in the request
exports.DeleteCafe = (req, res) => {

};

// Delete all Cafes from the database.
// exports.DeleteAllCafes = (req, res) => {

// };



exports.CreateEmployee = (req, res) => {

};

// Retrieve all Employees from the database.
exports.FindAllEmployees = (req, res) => {

};

// Find a single Employee with an id
exports.FindEmployee = (req, res) => {

};

// Delete a Employee with the specified id in the request
exports.DeleteEmployee = (req, res) => {

};