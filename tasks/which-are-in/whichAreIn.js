const inArray = (a1, a2) => a1.filter((substr) => a2.find((x) => x.indexOf(substr) !== -1)).sort();

module.exports = inArray;
