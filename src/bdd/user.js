const mysql = require('mysql');
console.log(process.env.DBUSER);
const connection = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBNAME,
  password: process.env.DBPASS,
  database: process.env.DBUSER,
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données.');
});

module.exports = connection;
