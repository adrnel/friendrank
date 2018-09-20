const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile('index.html', {root: './client/src'}));
app.get('/league', (req, res) => res.sendFile('index.html', {root: './client/src'}));
app.get('/profile', (req, res) => res.sendFile('index.html', {root: './client/src'}));
app.get('/settings', (req, res) => res.sendFile('index.html', {root: './client/src'}));

app.use(express.static('client/public'));
app.listen(3000, () => console.log('Example app listening on port 3000!'));