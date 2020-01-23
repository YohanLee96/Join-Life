require('dotenv').config();

const env = process.env;

const development ={
  username: env.DB_NAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  port: env.DB_PORT,
  dialect: env.DB_DIALECT
}


module.exports ={development};