module.exports.dirReduc = (arr) => {
  for (let i = 0; i < 5; i += 1) {
    switch (arr[i]) {
      case 'NORTH':
        if (arr[i + 1] === 'SOUTH') {
          arr.splice(i, 2);
          i = -1;
        }
        break;
      case 'SOUTH':
        if (arr[i + 1] === 'NORTH') {
          arr.splice(i, 2);
          i = -1;
        }
        break;
      case 'EAST':
        if (arr[i + 1] === 'WEST') {
          arr.splice(i, 2);
          i = -1;
        }
        break;
      case 'WEST':
        if (arr[i + 1] === 'EAST') {
          arr.splice(i, 2);
          i = -1;
        }
        break;
      default:
        break;
    }
  }
  return arr;
};
