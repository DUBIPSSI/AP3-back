const { verifName, verifMail, verifMdp, verifbirthDate } = require('../business/verif');

function validateUser(req, res, next) {
  const { username, userprenom, email, password, birth } = req.body;
  if (!verifName(username)) {
    console.log("a")
    return res.status(400).json({ error: 'Nom invalide.' });
  }
  if (!verifName(userprenom)) {
    console.log("b")
    return res.status(400).json({ error: 'Prénom invalide.' });
  }
  if (!verifMail(email)) {
    console.log("c")
    return res.status(400).json({ error: 'Adresse email invalide.' });
  }
  if (!verifMdp(password)) {
    console.log("d")
    return res.status(400).json({ error: 'Mot de passe invalide.' });
  }

  if (!verifbirthDate(birth)) {
    console.log("e")
    return res.status(400).json({ error: 'Date de naissance invalide.' });
  }
  console.log("f")
  next();
}

module.exports = validateUser;
