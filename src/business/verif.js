function verifName(name) {
  const regex = /^[A-Z][a-z]{0,26}$/;
  return regex.test(name);
}
function verifMail(mail) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(mail);
}
function verifMdp(mdp) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(mdp);
}
function verifbirthDate(date) {
  var regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(date);
}
module.exports = { verifName, verifMail, verifMdp, verifbirthDate };
