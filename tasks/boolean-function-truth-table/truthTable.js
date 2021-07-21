function truthTable(f) {
  const params = [...Array(f.length)].map((_, i) => String.fromCharCode(65 + i));
  const head = `${params.join` `}\t\t${f.name || 'f'}(${params.join`,`})\n\n`;
  const body = [...Array(2 ** f.length)].map((_, i) => {
    const args = [...i.toString(2).padStart(f.length, 0)].map(Number);
    const res = +f(...args);
    return `${args.join` `}\t\t${res}`;
  }).join`\n`;
  return `${head + body}\n`;
}

module.exports = truthTable;
