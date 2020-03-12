export class FormController {
    constructor(localStorageService){
        'ngInject'
        this.localStorageService = localStorageService
        this.store = 'tareas'
    }

    $onInit(){
        this.tarea = {nombre: '', isCompleted: false}
        this.tareas = this.localStorageService.get(this.store) ?
            this.localStorageService.get(this.store) : []
    }

    addTarea(){
        if(this.tarea.nombre){
            this.tareas.push(this.tarea)
            this.tarea = {nombre: '', isCompleted: false}
            this.localStorageService.set(this.store, this.tareas)
            
        }
    }

    borraTarea (i) {
        console.log('Borrando')
        this.tareas.splice(i,1)
        this.localStorageService.set(this.store, this.tareas)
    }

    actualizarTareas(){
        this.localStorageService.set(this.store, this.tareas) 
    }
}