let respuestas = 0;

let respuesta1 = prompt("¿Hace frio hoy? (si/no)")
if (respuesta1 === "si"){
    respuestas++
};

let respuesta2 = prompt("¿Va a llover? (si/no)")
if (respuesta2 === "si"){
    respuestas++
};

let respuesta3 = prompt("¿Es para una ocación formal? (si/no)")
if (respuesta3 === "si"){
    respuestas++
};

let respuesta4 = prompt("¿Te sientes cómodo con ropa ajustada? (si/no)")
if (respuesta4 === "si"){
    respuestas++
};

let respuesta5 = prompt("¿Estaras al aire libre? (si/no)")
if (respuesta5 === "si"){
    respuestas++
};

let recomendacion;

if (respuestas > 3){
    recomendacion ="Debes ponerte un  abrigo."
}else if (respuestas > 2){
    recomendacion ="Un sueter seria ideal."
}else {
    recomendacion ="Puedes optar por algo ligero, como una camiseta."
}

alert(recomendacion)

console.log(recomendacion)

let imagen;
if (respuestas >3){
    imagenRecomendada = "<img src='https://i.pinimg.com/originals/d0/07/aa/d007aa5f8bd8c6092febc6f3c315be6b.jpg' width='400px'>"
}else if (respuestas >2){
    imagenRecomendada = "<img src='https://images-na.ssl-images-amazon.com/images/I/71eUymzibKL._AC_UL1500_.jpg' width='400px'>"
}else {
    imagenRecomendada = "<img src='https://i.pinimg.com/originals/5f/e1/5c/5fe15c25375315044ae8c36ef2635f8d.jpg' width='400px'>"
}

document.write(imagenRecomendada)

