const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/get', require('./controllers/route'));
app.use('/post', require('./controllers/post'));
app.use('/update', require('./controllers/update'));

app.listen(process.env.SERVERPORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${process.env.SERVERPORT}`);
});
