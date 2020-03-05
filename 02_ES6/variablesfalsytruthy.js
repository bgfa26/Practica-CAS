//Valores Falsy
let x = undefined
if(x) {console.log('OK', x)}

x = false
if(x) {console.log('OK', x)}

x = ''
if(x) {console.log('OK', x)}

x = null
if(x) {console.log('OK', x)}

x = NaN
if(x) {console.log('OK', x)}


//Valores Truthy
x = true
if(x) {console.log('OK', x)}

x = 'Pepe'
if(x) {console.log('OK', x)}

x = 1
if(x) {console.log('OK', x)}

x = []
if(x) {console.log('OK', x)}

x = {}
if(x) {console.log('OK', x)}