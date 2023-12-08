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
  if (regex.test(date)) {
    var parts = date.split('/');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1;
    var year = parseInt(parts[2], 10);
    var date = new Date(year, month, day);
    var tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

    return date <= new Date() && date >= tenYearsAgo;
  }
  return false;
}
module.exports = { verifName, verifMail, verifMdp, verifbirthDate };
