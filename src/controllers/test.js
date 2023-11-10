const express = require('express');
const router = express.Router();
const codesPostaux = require('codes-postaux');
const { ajouterUtilisateur, verifPassword, getCity } = require('../business/add');
const { getUtilisateurs, getClub, getEvenement } = require('../business/get');
router.use(express.json());

router.post('/add', async (req, res) => {
  try {
    console.log(req.body);
    const { username, userprenom, codepostal, email, password } = req.body;
  console.log(req.body);
    const birth = '1999-01-01';
    const role = 1;
    // const pass = await verifPassword(password);
    // console.log(pass);
    await ajouterUtilisateur(username, userprenom, role, birth, 'ville', 'departement', email, password);
    res.send('Utilisateur ajouté avec succès.');
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'ajout de l'utilisateur." });
  }
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
    res.json(utilisateurs);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
});

router.get('/evenement', async (req, res) => {
  try {
    const utilisateurs = await getEvenement();
    res.json(utilisateurs);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
});
router.get('/:codepostale', async (req, res) => {
  try {
    const departement = await codesPostaux.find(req.params.codepostale);
    res.json(departement);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
});
module.exports = router;
