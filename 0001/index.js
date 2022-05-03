// Ejemplo 1
const edad = prompt('Decime tu edad');

alert('Tu edad es ' + edad);

//Ejemplo 2
const valor1  = 'Valor A';
//valor1 = 'Valor B'; // Tira error

let valor2 = 'Valor A';
valor2 = 'Valor B';

console.log(valor2);

// Ejemplo 3 - Interpolación de variables vs concatenación
let name = prompt('Decime tu nombre');
let lastname = prompt('Decime tu apellido');

// Interpolación de variables
console.log(`Tu nombre completo es ${name} ${lastname}`);

// Concatenación de strings
alert("Tu nombre completo es " + name + ' ' + lastname);

// Ejemplo 4 - Transformación de tipos
val1 = prompt("decime un numero");
console.log(val1);
console.log(typeof val1);

val1 = Number(val1);
console.log(val1);
console.log(typeof val1);