import mysql from 'mysql';
const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'web'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
})

module.exports = db;