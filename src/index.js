// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var change = {};
    var allNominals = [50, 25, 10, 5, 1];

  if (currency > 10000) {
    change.error = "You are rich, my friend! We don't have so much coins for exchange";
  }
  if (currency <= 0) {
    change = {};
  }
  if ((currency >0) && (currency < 10000)) {
    for (i = 0; i < allNominals.length; i++) {
      var nominal = allNominals[i];
      var intgr = Math.floor(currency/nominal);
        if (intgr > 0) {
          currency = currency % nominal;
          if (nominal == 50) {
            change.H = intgr;
          }
          if (nominal == 25) {
            change.Q = intgr;
          }
          if (nominal == 10) {
            change.D = intgr;
          }
          if (nominal == 5) {
            change.N = intgr;
          }
          if (nominal == 1) {
            change.P = intgr;
          }
        }
    }
  }
  return(change);
}


