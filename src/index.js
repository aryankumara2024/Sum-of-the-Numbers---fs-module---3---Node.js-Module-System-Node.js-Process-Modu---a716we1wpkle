const fs = require('fs');
const data = fs.readFileSync('./src/input.txt', 'utf8').split('\n');

const map = data.map(line => line.split(''));
let sum = 0;
map.forEach((line, i) => {
    for (let j = 0; j < line.length; j++) {
        sum += Number(line[j]);
    }
})
fs.writeFileSync('./src/output.txt', sum);