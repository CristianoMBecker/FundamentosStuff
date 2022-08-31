function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days')

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let day = decemberDaysList[index]
    let dayItem = document.createElement('li');
  
    if (day === 24 ||day === 31) {
      dayItem.className = 'day holiday'
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday'
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday'
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day'
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    }
  }
}

createDaysOfTheMonth();

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');

  newButton.innerHTML = buttonName;
  newButton.id = 'btn-holiday';
    
  buttonContainer.appendChild(newButton);
}
  
createHolidayButton('Feriados');

function color() {
  let holi = document.querySelectorAll('.holiday');
  let feriado = document.getElementById('btn-holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  feriado.addEventListener('click', function() {
    for (let index = 0; index < holi.length; index += 1) {
      if (holi[index].style.backgroundColor === setNewColor) {
        holi[index].style.backgroundColor = backgroundColor
      } else {
        holi[index].style.backgroundColor = setNewColor
      }
    }  
  })
}

color();

function botaosexta(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');

  newButton.innerHTML = buttonName;
  newButton.id = 'btn-friday';

  buttonContainer.appendChild(newButton)
}

botaosexta('Sexta-Feira');

function Sexta(freind) {
  let sex = document.querySelectorAll('.friday');
  let ta = document.getElementById('btn-friday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'green';

  ta.addEventListener('click', function() {
    for (let index = 0; index < sex.length; index += 1) {
      if (sex[index].innerHTML === 'Friday') {
        sex[index].innerHTML = freind[index];
      } else {
        sex[index].innerHTML = 'Friday';
      }
    }
  })
}

let ble = [4, 11, 18, 25];
Sexta(ble);

function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

dayMouseOver();
dayMouseOut();

function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
}

newTaskSpan('Spider-Man')