import { TURNOS, CURSOS } from "./data.js"

export class MainController{
    constructor(){
        this.header = '_header.html'
        this.footer = '_footer.html'
        this.form = '_form.html'
        this.cursos = CURSOS
        this.turnos = TURNOS
        this.alumno = {isOk: false}
    }
    /*  onClick(ev){
        console.log(ev)
    } */

    onSubmit(ev){
        ev.preventDefault()
        if(this.alumno.turno){
            delete this.alumno.turno.$$hashKey
        }
        console.log(this.alumno)
        console.log(this.formAlumno)
    }
}