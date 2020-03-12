import {MainController} from './main-controller.js'
import {FormController} from './form/form.js'
import {TareaController} from './tarea/tarea.js'
import {HomeController} from './home/home.js'


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
      controller: HomeController})
   
   $stateProvider.state('form', { 
      url:'/',  
      templateUrl: './form/form.html', 
      controller: FormController})

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