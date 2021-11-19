// FOR LOOPS

// for(let i = 1; i < 11; i++){
//     counting = i;
//     document.querySelector('p').innerText = 'The Loop Number Ends On ' + i;
// }


// WHILE LOOPS

// let i = 0;
// while(i < 10){ // while loop will run until the condition is false
//     i++;
//     document.querySelector('p').innerText = 'The Loop Number Ends On ' + i;
// }

// let i = 0;

// do { // do while loop will run at least once
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);


const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let i = 0; i < cars.length; i++) { // for loop will run until the condition is false
//   document.querySelector('p').innerText = 'Last Car in the Loop: ' + cars[i];
// }

// FOREACH METHOD
cars.forEach(function(cars, index, array) {
  document.querySelector('p').innerText = 'Last Car in the Loop: ' + cars;
})

// MAP METHOD
// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user) {
//   return user.id;
// } );

// FOR IN LOOP
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`)
}
