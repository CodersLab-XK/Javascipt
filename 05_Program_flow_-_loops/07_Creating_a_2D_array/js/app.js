const array = [];
const cols = 4;
const rows = 5;
// Write code under this comment.

for (let i = 0; i<rows; i++ ){
    const array2d = []
    for (let j = 1; j<=cols; j++ ){
    array2d.push (j)
    }
    array.push (array2d)
}
console.log(array)