const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const validateUser = require('./middleware');

const { ajouterUtilisateur, login, ajouterEvent } = require('../business/add');

router.use(express.json());

router.post('/add', validateUser, async (req, res) => {
  try {
    const { username, userprenom, email, password, birth, ville, departement, role } = req.body;
    await ajouterUtilisateur(username, userprenom, role, birth, ville, departement, email, password);
    res.send('Utilisateur ajouté avec succès.');
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'ajout de l'utilisateur." });
  }
});

router.post('/addEvent', async (req, res) => {
  try {
    const { nom, description, lieu, prix, capacite, date } = req.body;
    console.log(req.body);
    await ajouterEvent(nom, description, lieu, prix, capacite, date);
    res.send('Evenement ajouté avec succès.');
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'ajout de l'utilisateur." });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password);

    if (user) {
      const token = jwt.sign({ email: user.email, role: user.role }, 'token');
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
