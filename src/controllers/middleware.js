const { verifName, verifMail, verifMdp, verifbirthDate } = require('../business/verif');

function validateUser(req, res, next) {
  const { username, userprenom, email, password, birth } = req.body;
  if (!verifName(username)) {
    return res.status(400).json({ error: 'Nom invalide.' });
  }
  if (!verifName(userprenom)) {
    return res.status(400).json({ error: 'Prénom invalide.' });
  }
  if (!verifMail(email)) {
    return res.status(400).json({ error: 'Adresse email invalide.' });
  }
  if (!verifMdp(password)) {
    return res.status(400).json({ error: 'Mot de passe invalide.' });
  }

  if (!verifbirthDate(birth)) {
    return res.status(400).json({ error: 'Date de naissance invalide.' });
  }
  next();
}

module.exports = validateUser;
