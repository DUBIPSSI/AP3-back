const express = require('express');
const router = express.Router();

const { updateUtilisateur } = require('../business/apt');

router.post('/updateAvatar', async (req, res) => {
  try {
    console.log(req.body);
    const { avatar, email } = req.body;
    await updateUtilisateur(avatar, email);
    res.send('Utilisateur modifié avec succès.');
  } catch (error) {
    res.status(500).json({ error:error });
  }
});

module.exports = router;