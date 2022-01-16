module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    name: {
      type: Sequelize.STRING
    },
    days_worked: {
      type: Sequelize.INTEGER
    },
    cafe: {
      type: Sequelize.STRING
    },
  });

  return Employee;
};