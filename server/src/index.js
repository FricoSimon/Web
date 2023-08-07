import express from 'express';
import db from '../database/connect.js';
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const sql = `INSERT INTO user (username, password) VALUES (?, ?)`;
        const values = [username, password];
        const result = await new Promise((resolve, reject) => {
            db.query(sql, values, (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
        })

        res.status(201).json({ message: 'Register success' });
    } catch (error) {
        console.log(req.body);
        console.log(error);
    }
});


app.listen(port, () => { console.log(`Server is running on port ${port}`); })