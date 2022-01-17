module.exports = (sequelize, Sequelize) => {
  const Cafe = sequelize.define("cafes", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    employees: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    logo: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false
    },
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
  });

  return Cafe;
};