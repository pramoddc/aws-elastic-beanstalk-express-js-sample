const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Red Road Health Solutions.30/12/2020 new'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
