module.exports = {

  // all SQL database connection parameters
  // HOST: process.env.DB_HOST,
  // USER: process.env.DB_USER,
  // PASSWORD: process.env.DB_PASSWORD,
  // DB: process.env.DB_NAME,
  // port: process.env.DB_PORT,
  HOST: 'localhost',
  USER: 'developer',
  PASSWORD: '12345',
  DB: 'test_cafe_db',

  // port: 3306, // for native MySQL

  port: 33060, // for docker MySQL 5.7

  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};