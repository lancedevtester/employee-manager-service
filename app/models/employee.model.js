module.exports = (sequelize, Sequelize) => {

  let eid = 2200001

  const Employee = sequelize.define("employees", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    days_worked: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cafe: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
  });

  eid++

  return Employee;
};