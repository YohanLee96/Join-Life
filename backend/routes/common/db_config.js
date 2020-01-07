const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 20,
    host: "54.180.115.103",
    user: "joinlife",
    password: "joinlife0805",
    port: "3306",
    database: "joinLife",
    multipleStatements: true //다중쿼리 설정가능하도록
});

pool.on('connection', function (connection) { 
    console.log('커넥트를 돌려줍니다. (다 씀)');
});

pool.on('enqueue', function (connection) {
    console.log('모든 커넥트를 다 썼어요.');
});


module.exports=pool;