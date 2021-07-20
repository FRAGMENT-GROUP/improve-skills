function phone(strng, num) {
  const clean = strng.replace(/[^-0-9a-z\s+A-Z\n<>.']/g, ' ');
  const re = new RegExp(`\\+*${num}`);
  const a = clean.split('\n').filter((x) => re.test(x));
  if (a.length > 1) { return `Error => Too many people: ${num}`; }
  if (a.length === 0) { return `Error => Not found: ${num}`; }
  const rre = new RegExp(`\\+*${num}`);
  const c = a[0].replace(rre, '');
  const name = c.match(/<.*>/)[0];
  const ad = c.replace(/<.*>/, '').replace(/\s+/g, ' ').trim();
  return `Phone => ${num}, Name => ${name.substring(1, name.length - 1)}, Address => ${ad}`;
}

module.exports = phone;
