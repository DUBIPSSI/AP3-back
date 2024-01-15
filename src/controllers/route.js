const express = require('express');
const router = express.Router();
const codesPostaux = require('codes-postaux');
const jwt = require('jsonwebtoken');

const { getUtilisateurs, getEventBySport, getEvenement, getEventByParticipation } = require('../business/get');

router.use(express.json());

router.get('/user', (req, res) => {
  const { token } = req.query;
  console.log(req.query);
  try {
    const decoded = jwt.verify(token, 'token');
    res.status(200).send(true);
  } catch (error) {
    res.status(200).send(false);
  }
});

router.get('/utilisateur', async (req, res) => {
  const { token } = req.query;
  try {
    const decoded = jwt.verify(token, 'token');
    const utilisateurs = await getUtilisateurs(decoded.email);
    res.json(utilisateurs);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
});

// router.get('/club', async (req, res) => {
//   try {
//     const utilisateurs = await getClub();
//     res.json(utilisateurs);
//   } catch (error) {
//     res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
//   }
// });

router.get('/evenement', async (req, res) => {
  try {
    const utilisateurs = await getEvenement();
    res.json(utilisateurs);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
});

router.get('/getJoinedEvents', async (req, res) => {
  const { token } = req.query;
  try {
    const decoded = jwt.verify(token, 'token');
    const events = await getEventByParticipation(decoded.id);
    console.log(events);
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
});

router.get('/filterBySport', async (req, res) => {
  const { sport } = req.query;
  try {
    const utilisateurs = await getEventBySport(sport);
    res.json(utilisateurs);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
});

module.exports = router;
