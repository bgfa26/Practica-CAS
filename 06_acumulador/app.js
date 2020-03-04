angular.module('miApp', [])
.controller('MainController', function() {
    this.incremento = 2;
    this.total = 0
    this.onOperar= function(signo){
        this.total += signo*this.incremento
    }
})