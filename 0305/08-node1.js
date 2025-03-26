console.log("안녕 반갑");

const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")

const fs = require('fs');
const input = fs.readFileSync(
    process.platform === "linux" ?
    "/dev/stdin" : "./input.txt").toString().trim().split(" ");
 
var result = parseInt(input[0])+parseInt(input[1]);
console.log(result);
 
console.log(input);