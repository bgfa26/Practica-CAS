/*function MainController () {
    this.nombre = 'Pepe'
    this.onBorrar = function() {
        this.nombre = ''
    }
}*/


class MainController{
    constructor(){
    }

    $onInit(){
        this.nombre = 'Pepe'
    }
    onBorrar(){
        this.nombre = ''
    }
}


angular.module('miApp', [])
.controller('MainController', MainController)

