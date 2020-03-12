export class MainController{
    constructor($scope, $locale){
        'ngInject'
        this.$scope = $scope
        this.$locale = $locale
        
        console.log(this.$scope)

        //this.$locale.id = 'es-es'
        //this.$locale.localeID = 'es-ES'
        
        console.log(this.$locale)
    }
}