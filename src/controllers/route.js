const express = require('express');
const session = require('express-session');
const router = express.Router();
const codesPostaux = require('codes-postaux');

const { getUtilisateurs, getClub, getEvenement } = require('../business/get');

router.use(express.json());

router.use(
  session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

router.get('/utilisateur', async (req, res) => {
  try {
    const utilisateurs = await getUtilisateurs();
    res.json(utilisateurs);
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

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Utilisateur déconnecté avec succès.');
});

module.exports = router;
