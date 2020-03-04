function MainController(){
    this.listaTareas = []
    this.nuevatarea
    this.addTarea = function(){
        this.listaTareas.push(
                {
                    nombre: this.nuevatarea,
                    isCompleted: false
                }

            )
        this.nuevatarea = ''
        console.log(this.listaTareas)
    }

    this.borraTarea = function(i) {
        this.listaTareas.splice(i,1)
        console.log(this.listaTareas)
    }

    this.changeTarea = function(estado, i){
        this.listaTareas[i].isCompleted = estado
        console.log(this.listaTareas)
    }
}

angular.module('miApp')
.controller('MainController', MainController)

