const _ = module.require('lodash');

function luckyTicket(s) {
  const fs = _.countBy(s);
  let cur = s.length;
  let min = cur;
  Array.from(s).forEach((c) => {
    min = Math.min(min, cur -= Math.abs(fs[c]) - Math.abs(fs[c] -= 2));
  });

  return min;
}
module.exports = luckyTicket;
