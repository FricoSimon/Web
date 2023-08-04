import mysql from 'mysql';
const db = mysql.createConnection({
    host: '172.17.0.4',
    port: '3306',
    user: 'root',
    password: 'web',
    database: 'web'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
})

export default db;