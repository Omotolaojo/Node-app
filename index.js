const express = require('express');

const app = express();


const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {

  res.send('🚀 New DevOps Capstone App is Running Today!');

});


app.get('/health', (req, res) => {

  res.json({ status: 'OK' });

});


app.listen(PORT, () => {

  console.log(`Server running on at http:localhost: ${PORT}`);

});