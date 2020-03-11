export class FormController {
    constructor(){
    }

    $onInit(){
        this.tarea = {nombre: '', isCompleted: false}
        this.tareas = []
    }

    addTarea(){
        if(this.tarea.nombre){
            this.tareas.push(this.tarea)
            this.tarea = {nombre: '', isCompleted: false}
            console.log(this.tareas)
        }
    }

    borraTarea (i) {
        this.tareas.splice(i,1)
        console.log(this.tareas)
    }
}