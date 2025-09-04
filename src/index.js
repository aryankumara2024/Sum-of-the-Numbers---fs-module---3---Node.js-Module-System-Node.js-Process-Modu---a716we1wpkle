const fs = require('fs');
const data = fs.readFileSync('./src/input.txt', 'utf8').split('\n');

const map = data.map(line => line.split(' '));
let sum = 0;
map.forEach((line) => {
    sum += Number(line[1]);
})
fs.writeFileSync('./src/output.txt', sum.toString(), 'utf-8');