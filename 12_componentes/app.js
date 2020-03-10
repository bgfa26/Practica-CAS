import {MainController} from './main-controller.js'
import {HeaderController} from './header/header.js'

angular.module('miApp', [])
.controller('MainController', MainController)
.component('casHeader', {
    templateUrl: './header/header.html',
    controller: HeaderController
})