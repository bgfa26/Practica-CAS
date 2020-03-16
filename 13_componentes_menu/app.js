import {MainController} from './main-controller.js'
import {FormController} from './form/form.js'
import {TareaController} from './tarea/tarea.js'
import {HomeController} from './home/home.js'
import {LibrosController} from './libros/libros.js'

angular.module('miApp', [
   'core',
   'ui.router',
   'ngLocale', 
   'LocalStorageModule'])
.controller('MainController', MainController)

.config(function($stateProvider, $urlRouterProvider){
   
   $stateProvider.state('home', { 
      url:'/',  
      templateUrl: './home/home.html', 
      controller: HomeController,
      controllerAs: '$ctrl'
   })
   
   $stateProvider.state('form', { 
      url:'/',  
      component:'casForm'
   })

   $stateProvider.state('libros', { 
      url:'/',  
      templateUrl: './libros/libros.html', 
      controller: LibrosController,
      controllerAs: '$ctrl'
   })

})

.component('casForm', {
    templateUrl :'./form/form.html',
    controller: FormController
 })

 .component('casTarea', {
    templateUrl :'./tarea/tarea.html',
    controller: TareaController,
    bindings: {
       tarea: '<',
       evBorrar: '&', 
       evChange: '&' /* Evento Propio */
    }
   })