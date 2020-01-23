require('dotenv').config();

const env = process.env;

const development ={
  username: env.NAME,
  password: env.PASSWORD,
  database: env.DATABASE,
  host: env.HOST,
  port: env.PORT,
  dialect: env.DIALECT
}


module.exports ={development};