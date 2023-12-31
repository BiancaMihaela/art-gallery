const express = require('express');
const app = express();
const port = 3001;

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
