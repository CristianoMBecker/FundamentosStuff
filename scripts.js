let nothing = 0;
let fruits = [3, 4, 10, 1, 12];

for(let index = 0; index < fruits.length; index += 1 ) {
    nothing += fruits[index]
}

nothing = 15

if (nothing > 15) {
    console.log("O valor final é maior do que 15!")
} else if (nothing < 15){
    console.log("O valor final é menor do que 15!")
} else {
    console.log("O valor é 15!")
}