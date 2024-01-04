const express = require('express');
const router = express.Router();

router.post('/update', async (req, res) => {
  const { avatar } = req.body;
  try {
    await updateUtilisateur(avatar);
    res.send('Utilisateur modifié avec succès.');
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la modification de l'utilisateur." });
  }
});

export default router;
