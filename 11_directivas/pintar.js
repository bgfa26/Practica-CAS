export function pintar(){
    return {
        template: `<p>Escrito desde la directiva para {{$ctrl.user}}</p>`,
        restrict: 'AE',
        scope: {},
        controller: PintarController,
        controllerAs: '$crtl'
    }
}


class PintarController {
    constructor(){
        this.usera = 'Elena'
    }
}