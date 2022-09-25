const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B' ];

function nota (a, b) {
  let nota = 0;
  for (let ind = 0; ind < a.length; ind += 1) {
    console.log(nota)
    if (a[ind] === b[ind]) {
      nota += 1
    } else if (b[ind] !== 'N.A' & b[ind] !== a[ind]) {
      nota -= 0.5
    }
  }
  console.log(nota)
}

nota(RIGHT_ANSWERS, STUDENT_ANSWERS);
