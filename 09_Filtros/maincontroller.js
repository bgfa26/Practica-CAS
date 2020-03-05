function MainController() {
    this.autor = 'Bárbara Fernández'
    this.fecha = new Date()
    this.number = 3478.48565
    this.precio = 2000
}

angular.module('otraApp')
.controller('MainController', MainController)