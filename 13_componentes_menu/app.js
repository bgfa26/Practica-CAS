import {MainController} from './main-controller.js'
import {HeaderController} from './header/header.js'
import {FooterController} from './footer/footer.js'
import {FormController} from './form/form.js'
import {TareaController} from './tarea/tarea.js'

angular.module('miApp', [
   'ui.router',
   'ngLocale', 
   'LocalStorageModule'])
.controller('MainController', MainController)
.component('casHeader', {
    templateUrl: './header/header.html',
    controller: HeaderController
})
.component('casFooter', {
   templateUrl :'./footer/footer.html',
   controller: FooterController
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