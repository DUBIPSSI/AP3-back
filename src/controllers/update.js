const express = require('express');
const router = express.Router();

router.post('/updateAvatar', async (req, res) => {
  const { avatar, email } = req.body;
  try {
    await updateUtilisateur(avatar, email);
    res.send('Utilisateur modifié avec succès.');
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la modification de l'utilisateur." });
  }
});

export default router;
