const db = require('../bdd/user');

async function getUtilisateurs(email) {
  const query = `SELECT * FROM utilisateur WHERE mail = ? `;
  return new Promise((resolve, reject) => {
    db.query(query, [email], (error, results) => {
      if (error) {
        console.error('Erreur lors de la récupération des utilisateurs : ' + error);
        reject(error);
      } else {
        console.log('Utilisateurs récupérés avec succès !');
        resolve(results);
      }
    });
  });
}
async function getClub() {
  const query = `SELECT * FROM club`;
  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        console.error('Erreur lors de la récupération des utilisateurs : ' + error);
        reject(error);
      } else {
        console.log('Club récupérés avec succès !');
        resolve(results);
      }
    });
  });
}

async function getEvenement() {
  const query = `SELECT * FROM evenement ORDER BY id DESC `;
  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        console.error('Erreur lors de la récupération des utilisateurs : ' + error);
        reject(error);
      } else {
        console.log('Evenement récupérés avec succès !');
        resolve(results);
      }
    });
  });
}

async function getUserId(email) {
  const query = `SELECT id FROM utilisateur WHERE mail = ? `;
  return new Promise((resolve, reject) => {
    db.query(query, [email], (error, results) => {
      if (error) {
        console.error('Erreur lors de la récupération des utilisateurs : ' + error);
        reject(error);
      } else {
        console.log('Utilisateurs récupérés avec succès !');
        resolve(results);
      }
    });
  });
}

async function getEventByParticipation() {}

module.exports = { getUtilisateurs, getClub, getEvenement, getUserId };
