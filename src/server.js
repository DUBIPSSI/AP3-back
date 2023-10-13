const express = require('express');
const app = express();

const port = 8000;

app.use(require('./controllers/test'));

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
