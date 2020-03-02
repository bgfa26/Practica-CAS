console.log(suma(2,6))

// declaracion

function suma(a,b){
    return a + b;
}

const resta = function (a,b){
    return a - b;
}
console.log(resta(6,7))

// ES6 Arrow Functions o Lambdas

const prod = (a,b) => {return a*b}
// const prod = (a,b) => a*b si es un unico parametro se puede escribir asi
const cuadrado = a => a*a
console.log(prod(5,6))
console.log(cuadrado(9))

//Call backs
pintar = function (){
    console.log('pintando')
}
setTimeout(pintar, 200)

//Si solo se usa una vez se hace lo siguiente
// setTimeout(function (){
    //console.log('pintando'), 2000)

// o con arrow
// setTimeout ( () => console.log('`pintando'), 2000)

const datos = [6, 7, 5, 3]
const cuadrados = datos.map(item => item*item)
console.log(cuadrados)

