//objetos literales
const o ={user: 'Juana', edad: 25} 

function Persona(user, edad){
    this.user = user
    this.edad = edad
    
}

Persona.prototype.saludar = function () {
    console.log(`Soy ${this.user} y tengo ${this.edad} años`)
}
const p1 = new Persona('Pepe', 45);
const p2 = new Persona('Raquel', 40);
p2.altura = 178
delete p2.edad

console.log(p1)
console.log(p2)
p1.saludar()