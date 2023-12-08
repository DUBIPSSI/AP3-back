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
  var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
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
