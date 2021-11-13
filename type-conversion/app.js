let val;

// Number to string

val = String(555);
val = String(4+4)

// Boolean to string
val = String(true)
// Date to string
val = String(new Date())
// Array to string
val = String([1,2,3,4])

// toString()
val = (5).toString();
val = (true).toString();

// String to Number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1,2,3]);



// output
console.log(val)
console.log(typeof val)
// console.log(val.length)
console.log(val.toFixed())
