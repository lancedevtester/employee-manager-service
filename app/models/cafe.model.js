module.exports = (sequelize, Sequelize) => {
  const Cafe = sequelize.define("cafe", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    employee: {
      type: Sequelize.INTEGER
    },
    logo: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    id: {
      type: Sequelize.UUID,
      primaryKey: true
    },
  });

  return Cafe;
};