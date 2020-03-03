const a = {user: 'Pepe', edad: 23}
const b = {...a}

b.user = 'Elena'
console.log(a,b)

crecer(b)
console.log(a,b)

function crecer(alguien) {
    alguien.edad++
}

datos = [1, 2, 34, 5, 6, 89, 12]
originales = [...datos]
datos.sort( (a, b) => a-b )

console.log(originales)
console.log(datos)

