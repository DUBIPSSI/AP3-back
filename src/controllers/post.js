const express = require('express');
const session = require('express-session');
const router = express.Router();
const codesPostaux = require('codes-postaux');
const jwt = require('jsonwebtoken');

const { ajouterUtilisateur, login } = require('../business/add');

router.use(express.json());

router.use(
  session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

router.post('/add', async (req, res) => {
  try {
    const { username, userprenom, email, password, birth, role } = req.body;
    await ajouterUtilisateur(username, userprenom, role, birth, 'ville', 'departement', email, password);
    res.send('Utilisateur ajouté avec succès.');
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'ajout de l'utilisateur." });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password);

    if (user) {
      const token = jwt.sign({ userId: user.id, email: user.email }, 'token');
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Identifiants invalides.' });
    }
  } catch (error) {
    console.error("Erreur lors du login de l'utilisateur : ", error);
    res.status(500).json({ error: "Erreur lors du login de l'utilisateur." });
  }
});

module.exports = router;