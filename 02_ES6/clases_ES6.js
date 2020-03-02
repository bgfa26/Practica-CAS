class Humano{
    constructor(user, edad) {
    this.user = user
    this.edad = edad
    }
    saludar() {
        console.log(`Soy ${this.user} y tengo ${this.edad} años`)
    }
}

const h1 = new Humano('Luis', 23)
h1.altura = 179
console.log(h1)

class Alumno extends Humano{
    constructor(user, edad, curso){
        super(user,edad)
        this.curso = curso
    }
    saludar(){
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}

const a1 = new Alumno('Maria', 26, 'AngularJS')
a1.saludar()