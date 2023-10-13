const db = require('../bdd/user');

async function ajouterUtilisateur(username, userprenom, role, birth, ville, departement, email, password) {
  const query = `
    INSERT INTO utilisateur (nom, prenom, role, date_de_naissance, ville, departement, mail, mot_de_passe)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(query, [username, userprenom, role, birth, ville, departement, email, password], (error, results) => {
        if (error) {
          console.error("Erreur lors de l'ajout de l'utilisateur : " + error);
          reject(error);
        } else {
          console.log('Utilisateur ajouté avec succès !');
          resolve(results);
        }
      });
    });
    return results;
  } catch (error) {
    throw error;
  }
}

function getCity(codepostale) {}

module.exports = { ajouterUtilisateur };
