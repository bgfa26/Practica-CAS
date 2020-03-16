export class LibrosController{
    constructor($http){
        'ngInject'
        this.$http = $http
        this.url = 'https://www.googleapis.com/books/v1/volumes?q='
        this.libros = []
        this.error = ''
    }

    onBuscar(){
        if(this.clave){
            console.log('Buscando sobre', this.clave)
            this.$http.get(this.url+this.clave).then(
                response => {
                    console.log(response)
                    if(!response.data.items){
                        this.libros = []
                        this.error = `Error 404 'Not Found'`
                        return
                    }
                    this.libros = response.data.items.map(
                        (item) => {return {
                            id: item.id,
                            autores: item.volumeInfo.authors,
                            titulo: item.volumeInfo.title
                        }}                    )
                    console.log(this.libros)
                }
            ).catch(
                (error) =>{
                    this.error = `Error ${error.status}: ${error.data}`
                    console.log(error)
                }
            )
        }
    }
}