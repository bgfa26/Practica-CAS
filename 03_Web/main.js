 export function main(params) {
    //Definir los nodos del DOM
    const ndNombre = document.querySelector('#i_nombre')
    const ndBtnSaludar = document.querySelector('#b_saludar')
    const ndOutParrafo = document.querySelector('#o_parrafo')

    //Definir los handlers o manejadores de eventos

    ndBtnSaludar.addEventListener('click', onSaludar);

    //Implementar los manejadores 

    function onSaludar() {
        ndOutParrafo.innerHTML = `
        Hola <b>${ndNombre.value}</b>, como estas
        `
    }
}