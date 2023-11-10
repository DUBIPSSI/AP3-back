const express = require('express');
const router = express.Router();
const { ajouterUtilisateur, verifPassword, getCity } = require('../business/add');
const { getUtilisateurs, getClub, getEvenement } = require('../business/get');

router.post('/add', (req, res) => {
  const { username, userprenom, role, birth, codepostale, email, password } = req.body;
  // const { ville, departement } = getCity(codepostale);
  const pass = verifPassword(password);
  ajouterUtilisateur(username, userprenom, role, birth, null, null, email, pass);
  res.send('Utilisateur ajouté avec succès.'); // Réponse pour la requête POST
});

router.get('/utilisateur', async (req, res) => {
  try {
    const utilisateurs = await getUtilisateurs();
    res.json(utilisateurs); // Répondre avec les utilisateurs en format JSON
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  } 
});

router.get('/club', async (req, res) => {
  try {
    const utilisateurs = await getClub();
    res.json(utilisateurs); // Répondre avec les utilisateurs en format JSON
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
});

router.get('/evenement', async (req, res) => {
  try {
    const utilisateurs = await getEvenement();
    res.json(utilisateurs); // Répondre avec les utilisateurs en format JSON
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
});

module.exports = router;
