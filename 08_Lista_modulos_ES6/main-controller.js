export class MainController{
    constructor($sce){
        this.titulo = $sce.trustAsHtml('<i>Tareas<i/>')
        this.listaTareas = []
        this.tarea
        
    }
    
    addTarea (){
        this.listaTareas.push(
                {
                    nombre: this.nuevatarea,
                    isCompleted: false
                }

            )
        this.nuevatarea = ''
        console.log(this.listaTareas)
    }

    borraTarea (i) {
        this.listaTareas.splice(i,1)
        console.log(this.listaTareas)
    }

    changeTarea(){
        //this.listaTareas[i].isCompleted = estado
        console.log(this.listaTareas)
    }

}

