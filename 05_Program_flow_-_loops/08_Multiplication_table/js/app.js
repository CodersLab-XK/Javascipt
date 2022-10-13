const n = 10;
const calc = [];
// Write code under this comment.

for (let i = 1; i <= n; i++){
    let newArray = [];
    for (let j = 1; j <= n; j++){
        newArray.push(`${i} * ${j} = ${j * i}`);
    }
    calc.push(newArray);
}
console.log(calc);