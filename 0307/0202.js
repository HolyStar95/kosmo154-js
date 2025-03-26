const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n")
const matrix = input.map((line) => line.split(" ").map(Number));

// 1. 한 줄에 스페이스바 : 스플릿 뒤에 " "
// 2. 2열 이상과 여러 행일때

console.log(matrix[2][1]);