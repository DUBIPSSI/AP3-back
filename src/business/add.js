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
async function verifPassword(password) {
  try {
    if (password.length < 8) {
      return error;
    } else if (password.search(/[a-z]/) == -1) {
      return error;
    } else if (password.search(/[A-Z]/) == -1) {
      return false;
    } else if (password.search(/[0-9]/) == -1) {
      return false;
    } else if (password.search(/[#?!@$ %^&*-]/) == -1) {
      return false;
    } else if (password.length > 16) {
      return false;
    }
  } catch (error) {
    console.error('Erreur lors de la vérification du mot de passe : ' + error);
    reject(error);
  }
  return password;
}

function getCity(codepostale) {
  axios.get().then((reponse) => {});
}

module.exports = { ajouterUtilisateur, verifPassword, getCity };
