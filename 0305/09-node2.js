const fs = require('fs');
const [n, input] = fs.readFileSync(
    process.platform === "linux" ?
    "/dev/stdin" : "./input.txt").toString().trim().split("\r\n");
 
console.log(n);
console.log(input.split(' '));