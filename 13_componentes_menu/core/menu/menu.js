export class MenuController {
    constructor(){

    }

    $onInit(){
        this.menuItems = [
            {state: 'home', label: 'Inicio'},
            {state: 'form', label: 'Cursos'},
            {state: 'about', label: 'Acerca de'}
        ]
    }
}