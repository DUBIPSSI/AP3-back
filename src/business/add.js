const db = require('../bdd/user');
const bcrypt = require('bcrypt');

async function ajouterUtilisateur(username, userprenom, role, birth, ville, departement, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10); // Hashage du mot de passe

  const query = `
    INSERT INTO utilisateur (nom, prenom, role, date_de_naissance, ville, departement, mail, mot_de_passe)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  try {
    const results = await new Promise((resolve, reject) => {
      db.query(query, [username, userprenom, role, birth, ville, departement, email, hashedPassword], (error, results) => {
        if (error) {
          console.error("Erreur lors de l'ajout de l'utilisateur : " + error);
          reject(error);
        } else {
          console.log('Utilisateur ajouté avec succès !');
          resolve(results);
        }
      });
    });
  } catch (error) {
    throw error;
  }
}

async function login(email, password) {
  const query = `
    SELECT id, mail, mot_de_passe FROM utilisateur WHERE mail = ?
  `;
  try {
    const userData = await new Promise((resolve, reject) => {
      db.query(query, [email], async (error, results) => {
        if (error) {
          console.error("Erreur lors de la recherche de l'utilisateur : " + error);
          reject(error);
        } else {
          if (results.length > 0) {
            const user = results[0];
            bcrypt.compare(password, user.mot_de_passe, (err, passwordMatch) => {
              if (err) {
                console.error('Erreur lors de la comparaison des mots de passe : ' + err);
                reject(err);
              } else if (passwordMatch) {
                console.log('Mot de passe valide !');
                resolve({ id: user.id, email: user.mail });
              } else {
                console.log('Mot de passe invalide.');
                resolve(null);
              }
            });
          } else {
            console.log('Aucun utilisateur trouvé avec cet email.');
            resolve(null);
          }
        }
      });
    });
    return userData;
  } catch (error) {
    throw error;
  }
}

module.exports = { ajouterUtilisateur, login };
