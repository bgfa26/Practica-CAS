angular.module('miApp', [])
.controller('MainController', function() {
    this.nombre = 'Pepe'
    this.onBorrar = function() {
        this.nombre = ''
    }
})

