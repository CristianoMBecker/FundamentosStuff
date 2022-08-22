let string = 'Cristiano';
let reverse = '';

for (let index = (string.length - 1); 0 <= index; index -= 1) {
    reverse += string[index]
}

console.log(reverse)