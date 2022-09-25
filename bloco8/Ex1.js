const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function authorBornIn1947(array) {
  const y = array.find(element => element.author.birthYear === 1947);
  console.log(y.author.name);
}

authorBornIn1947(books);

function acharMenor(array){
  let menor = 1000;
  array.forEach(element => {
    if (element.name.length < menor) {
      menor = element.name.length;
    }
  })
  return menor;
}

function smallerName(array) {
  const menor = acharMenor(array);
  array.forEach(element => {
    if (element.name.length === menor) {
      console.log(element.name);
    }
  })
}

smallerName(books);

function name26(array) {
  const name26 = array.find(element => element.name.length === 26)
  console.log(name26.name)
}

name26(books);

function booksOrderedByReleaseYearDesc(array) {
  array.sort(function(a, b) {
    if (a.releaseYear > b.releaseYear) {
      return -1;
    } else if (a.releaseYear < b.releaseYear) {
      return 1;
    }
    return 0;
  });
  console.log(array);
};

booksOrderedByReleaseYearDesc(books);

function BornOnSecXX (ano) {
  if (ano >= 1900 & ano < 2000) {
    return true
  }
  return false;
}

function everyoneBornOnSecXX(array) {
  console.log(array.every(BornOnSecXX))
}

everyoneBornOnSecXX(books);

function book80 (livro) {
  if (livro.releaseYear > 1979 & livro.releaseYear < 1990) {
    return true;
  }
  return false;
}

function someBookWasReleaseOnThe80s(array) {
  console.log(array.some(book80));
}

someBookWasReleaseOnThe80s(books);

const yearsTested = [];

function authorUnique1(array) {
    if (yearsTested.includes(array.author.birthYear)) {
      return false;
    }
    yearsTested.push(array.author.birthYear);
    return true;
}

function authorUnique2(array) {
  console.log(array.every(authorUnique1))
}


authorUnique2(books);
