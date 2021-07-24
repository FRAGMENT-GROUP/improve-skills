function phone(strng, num) {
  const clean = strng.replace(/[^-0-9a-z\s+A-Z\n<>.']/g, ' ');
  const registry = new RegExp(`\\+*${num}`);
  const people = clean.split('\n').filter((x) => registry.test(x));
  if (people.length > 1) { return `Error => Too many people: ${num}`; }
  if (people.length === 0) { return `Error => Not found: ${num}`; }
  const registryRes = new RegExp(`\\+*${num}`);
  const adress = people[0].replace(registryRes, '');
  const name = adress.match(/<.*>/)[0];
  const adressRes = adress.replace(/<.*>/, '').replace(/\s+/g, ' ').trim();
  return `Phone => ${num}, Name => ${name.substring(1, name.length - 1)}, Address => ${adressRes}`;
}

module.exports = phone;
