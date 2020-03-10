import { MainController } from "./main.controller.js";
import { pintar } from "./pintar.js";


angular.module('miApp', [])
.controller('MainController', MainController)
.directive('casPintar', pintar)