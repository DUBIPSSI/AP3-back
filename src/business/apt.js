const db = require('../bdd/user');

async function updateUtilisateur(avatar, email) {
  const query = `UPDATE utilisateur SET avatar = ? WHERE mail = ?`;
  try {
    const results = await new Promise((resolve, reject) => {
      db.query(query, [avatar, email], (error, results) => {
        if (error) {
          console.error("Erreur lors de la modification de l'utilisateur : " + error);
          reject(error);
        } else {
          console.log('Utilisateur modifié avec succès !');
          resolve(results);
        }
      });
    });
  } catch (error) {
    console.log('fdp');
  }
}

module.exports = { updateUtilisateur };
