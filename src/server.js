const express = require('express');
const app = express();
const cors = require('cors');

const port = 8000;
app.use(cors());

app.use(require('./controllers/test'));

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
