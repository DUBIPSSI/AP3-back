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
  } catch (error) {
    throw error;
  }
}
async function verifPassword(password) {
  try {
    if (password.length < 16 ) {
      return error;
    } else if (password.search(/[a-z]/) == -1) {
      return error;
    } else if (password.search(/[A-Z]/) == -1) {
      return error;
    } else if (password.search(/[0-9]/) == -1) {
      return error;
    } else if (password.search(/[#?!@$ %^&*-]/) == -1) {
      return error;
    }
  } catch (error) {
    console.error('Erreur lors de la vérification du mot de passe : ' + error);
    reject(error);
  }
  return password;
}

function getCity(codepostale) {
  axios
  .get(codesPostaux.find(codepostale)).
  then((reponse) => {
    const { ville, departement } = reponse;
    return { ville, departement };
  })
  .catch((error) => {
    console.error('Erreur lors de la récupération de la ville et du département : ' + error);
    reject(error);
  });
}

module.exports = { ajouterUtilisateur, verifPassword, getCity };
