const express = require('express');
const app = express();

const os = require('os');
const data = require('./data');

app.get('/persons', (req, res) => {
    res.json(data)
})

app.get('/person/:id', (req, res) => {
    const personId = parseInt(req.params.id);
    if(isNaN(personId)){
        res.json({
            error: "The person ID is not valid",
            from: os.hostname(),
            data: null,
        });
    } else {
        let person = data.find((e) => e.id === personId);
        person = (person !== undefined ? person : null);
        res.json({
            error: null,
            from: os.hostname(),
            data: person,
        });
    }
})

app.listen(3000, '0.0.0.0', () => {
    console.log("Backend running on port 3000")
})