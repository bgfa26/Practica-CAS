angular.module('miApp', [])
.controller('MainController', ['$scope', function($scope) {
    $scope.nombre = 'Pepe'
    $scope.onBorrar = function() {
        $scope.nombre = ''
    }
}])


