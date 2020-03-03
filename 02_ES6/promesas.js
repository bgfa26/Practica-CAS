function asyncPromise () {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                let n = Math.random()
                if(n < 0.7){
                    resolve(`Acierto con el numero ${n}`)
                } else {
                    reject(new Error(n))
                }
            }, 2000)
        }
    );

}

/*asyncPromise()
.then( (response) => {
    console.log(response)
} )
.catch( (error) => {
    console.log('Error', error.message)
} )*/

//Async / Await ES2017

async function main (){
    try{
        let response = await asyncPromise()
        console.log('Async / Await', response)
    }catch(error){
        console.log('Error Async / Await', error.message)
    }
}

main()
//O tambien
/*(async function  () {
    try{
        let response = await asyncPromise()
        console.log('Async / Await', response)
    }catch(error){
        console.log('Error Async / Await', error.message)
    }
})()*/
