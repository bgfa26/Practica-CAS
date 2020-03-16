export class HomeController{
    constructor($http) {
        'ngInject'
        this.$http = $http
        this.url = "https://jsonplaceholder.typicode.com/users/"
        this.num = 3
        this.user = {nombre: 'Pepe', edad: '33'}
    }

    onRead(){
        console.log('Read')
        this.$http.get(this.url+this.num).then(
            response => console.log(response)
        )
    }

    onCreate(){
        console.log('Create')
        this.$http.post(this.url, this.user).then(
            response => console.log(response)
        )
    }

    onUpdate(){
        console.log('Update')
        this.$http.put(this.url+this.num, this.user).then(
            response => console.log(response)
        )
    }

    onDelete(){
        console.log('Delete')
        this.$http.delete(this.url+this.num).then(
            response => console.log(response)
        )
    }
}