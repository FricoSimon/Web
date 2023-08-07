import express from 'express';
import db from '../database/connect.js';
import hashPassword from '../util/hash.js';
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
        const hashedPassword = await hashPassword(password);
        const sql = `INSERT INTO user (username, password) VALUES (?, ?)`;
        const values = [username, hashedPassword];
        const result = await db.query(sql, values);

        if (result.error) {
            console.log(result.error);
            res.status(500).json({ message: result.error });
            return;
        }

        res.status(201).json({ message: 'Register success' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: result.error });
    }
});


app.listen(port, () => { console.log(`Server is running on port ${port}`); })