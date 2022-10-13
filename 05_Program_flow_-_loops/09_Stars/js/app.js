const n = 5;
// Write code under this comment.

// for ( let i = 1 ; i <= n ; i++){
//    console.log("* ".repeat(i))
// }

const b = 5;
let string = "";
for (let i = 1; i <= b; i++){
    for (let j = 0; j < i; j++){
        string += "* ";
    }
    string += "\n";
}
console.log(string);