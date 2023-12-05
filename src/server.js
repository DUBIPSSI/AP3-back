const express = require('express');
const app = express();
const cors = require('cors');

const port = 8000;
app.use(cors());

app.use('/get', require('./controllers/route'));
app.use('/post', require('./controllers/post'));

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
