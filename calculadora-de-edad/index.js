const AÑO_ACTUAL = 2024;

let añoNacimiento = prompt("¿En que año naciste?");

let edad = AÑO_ACTUAL - añoNacimiento;

// document.write ("Tu edad es de ", edad, " años")

let nuevoParrafo = document.createElement("p");

let mensaje = ("Tu edad es de " + edad + " años")

nuevoParrafo.textContent = mensaje;

document.body.appendChild(nuevoParrafo);

console.log ("Tu edad es de "+ edad + " años")