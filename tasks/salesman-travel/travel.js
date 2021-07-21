function travel(r, zipcode) {
  const addressList = r.split(',');
  const streets = [];
  const numbers = [];
  addressList.forEach((address) => {
    const zip = address.substring(address.length - 8, address.length);
    if (zip === zipcode) {
      const number = address.substring(0, address.indexOf(' ') + 1);
      const street = address.substring(address.indexOf(' '), address.length - 8);
      streets.push(street.trim());
      numbers.push(number.trim());
    }
  });
  return `${zipcode}:${streets.join(',')}/${numbers.join(',')}`;
}

module.exports = travel;
