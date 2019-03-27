const express = require('express');

//this will generate new application that represent the running express app
const app = express();

app.get('/', (req, res) => {
    res.send({ hi:' thr' })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
