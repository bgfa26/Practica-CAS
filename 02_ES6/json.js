let data = {user: 'Pepe', edad: 23, address: {calle: 'Paz', num: 3}};
console.log(typeof data, data)

let cadena = JSON.stringify(data)
console.log(typeof cadena, cadena)

let clon = {...data}
console.log(typeof clon, clon)
// NO se clona el segundo nivel

let newData = JSON.parse(cadena)
console.log(typeof newData, newData)
//En este si se clonan todos los niveles

let deepClon = JSON.parse(JSON.stringify(data))
//Manera de hacer el deep clon de todos los niveles