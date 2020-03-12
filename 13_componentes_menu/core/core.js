
import { HeaderController } from '/13_componentes_menu/core/header/header.js'
import { FooterController } from '/13_componentes_menu/core/footer/footer.js'
import { MenuController } from '/13_componentes_menu/core/menu/menu.js'

angular.module('core', [])

.component('casHeader', {
    templateUrl: '/13_componentes_menu/core/header/header.html',
    controller: HeaderController
})
.component('casFooter', {
   templateUrl :'/13_componentes_menu/core/footer/footer.html',
   controller: FooterController
})
.component('casMenu', {
    templateUrl :'/13_componentes_menu/core/menu/menu.html',
    controller: MenuController
 })