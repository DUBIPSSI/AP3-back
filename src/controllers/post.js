const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const validateUser = require('./middleware');
const { getUserId } = require('../business/get');
const { ajouterUtilisateur, login, ajouterEvent, ajouterParticipation, deleteParticipation } = require('../business/add');

router.use(express.json());

router.post('/add', validateUser, async (req, res) => {
  try {
    const { username, userprenom, email, password, birth, ville, departement, role } = req.body;
    await ajouterUtilisateur(username, userprenom, role, birth, ville, departement, email, password);
    const id = await getUserId(email);
    const token = jwt.sign({ email: email, role: role, id: id }, process.env.SECRET_KEY);
    res.status(200).json({ token });
  } catch (error) {
    res.status(200).json({ error: "Erreur lors de l'ajout de l'utilisateur." });
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
      const token = jwt.sign({ email: user.email, role: user.role, id: user.id }, process.env.SECRET_KEY);
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Identifiants invalides.' });
    }
  } catch (error) {
    console.error("Erreur lors du login de l'utilisateur : ", error);
    res.status(500).json({ error: "Erreur lors du login de l'utilisateur." });
  }
});

router.post('/addParticipation', async (req, res) => {
  try {
    const { event_id, token } = req.body;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;
    await ajouterParticipation(userId, event_id);
    res.status(200).json({ message: 'Participation ajoutée avec succès.' });
  } catch (error) {
    res.status(200).json({ error: "Erreur lors de l'ajout de la participation." });
  }
});

router.post('/deleteParticipation', async (req, res) => {
  try {
    const { event_id, token } = req.body;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;
    await deleteParticipation(userId, event_id);
    res.status(200).json({ message: 'Participation supprimée avec succès.' });
  } catch (error) {
    res.status(200).json({ error: 'Erreur lors de la suppression de la participation.' });
  }
});

module.exports = router;
