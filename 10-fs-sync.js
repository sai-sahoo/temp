const { readFileSync, writeFileSync } = require('fs');
const firstFileCont = readFileSync('./content/first.txt', 'utf-8');
const secondFileCont = readFileSync('./content/second.txt', 'utf-8');
console.log(firstFileCont, secondFileCont);
writeFileSync('./content/third.txt', `${firstFileCont}, ${secondFileCont}`, { flag: 'a' });