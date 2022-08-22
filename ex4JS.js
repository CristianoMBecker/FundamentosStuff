let magnetic = ['java', 'javascript', 'python', 'html', 'css'];
let maiorNumero = 0;
let maior;

for (let index = 0; index < magnetic.length; index += 1) {
    if (magnetic[index].length > maiorNumero) {
        maiorNumero = magnetic[index].length
        maior = magnetic[index]
    }
}

console.log(maior)