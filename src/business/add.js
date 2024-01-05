const db = require('../bdd/user');
const bcrypt = require('bcrypt');

async function ajouterUtilisateur(username, userprenom, role, birth, ville, departement, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10); // Hashage du mot de passe

  const query = `
    INSERT INTO utilisateur (nom, prenom, role, date_de_naissance, ville, departement, mot_de_passe, mail)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  try {
    const results = await new Promise((resolve, reject) => {
      db.query(query, [username, userprenom, role, birth, ville, departement, hashedPassword, email], (error, results) => {
        if (error) {
          console.error("Erreur lors de l'ajout de l'utilisateur : " + error);
          reject(error);
        } else {
          console.log('Utilisateur ajouté avec succès !');
          resolve(results);
        }
      });
    });
  } catch {
    console.log('fdp');
  }
}

async function login(email, password) {
  const query = `
    SELECT id, mail, mot_de_passe, role FROM utilisateur WHERE mail = ?
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
                resolve({ email: user.mail, role: user.role, id: user.id });
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

async function ajouterEvent(nom, description, lieu, prix, capacite, date) {
  const query = `
    INSERT INTO evenement (nom, description, lieu, prix, capacite, date)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  try {
    const res = await new Promise((resolve, reject) => {
      db.query(query, [nom, description, lieu, prix, capacite, date], (error, results) => {
        if (error) {
          console.error("Erreur lors de l'ajout de l'utilisateur : " + error);
          reject(error);
        } else {
          console.log('Evenement ajouté avec succès !');
          resolve(results);
        }
      });
    });
  } catch (error) {
    throw error;
  }
}

async function ajouterParticipation(idUtilisateur, idEvenement) {
  const query = `
    INSERT INTO participation (id_user, id_event)
    VALUES (?, ?)
  `;
  try {
    const res = await new Promise((resolve, reject) => {
      db.query(query, [idUtilisateur, idEvenement], (error, results) => {
        if (error) {
          console.error("Erreur lors de l'ajout de l'utilisateur : " + error);
          reject(error);
        } else {
          console.log('Participation ajoutée avec succès !');
          resolve(results);
        }
      });
    });
  } catch (error) {
    console.log('enfoire');
  }
}

async function deleteParticipation(idUtilisateur, idEvenement) {
  const query = `
    DELETE FROM participation WHERE id_user = ? AND id_event = ?
  `;
  try {
    const res = await new Promise((resolve, reject) => {
      db.query(query, [idUtilisateur, idEvenement], (error, results) => {
        if (error) {
          console.error("Erreur lors de l'ajout de l'utilisateur : " + error);
          reject(error);
        } else {
          console.log('Participation supprimée avec succès !');
          resolve(results);
        }
      });
    });
  } catch (error) {
    console.log('enfoire');
  }
}

module.exports = { ajouterUtilisateur, login, ajouterEvent, ajouterParticipation, deleteParticipation };
