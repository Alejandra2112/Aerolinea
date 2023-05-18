let fechaActual = new Date();
const expresionvolar = /^[a-zA-Z\s]+$/;

const formulario = document.getElementById('formulario');
const message = document.getElementById('mostrar');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const returning = document.getElementById('returning').value;
    const departing = document.getElementById('departing').value;
    const volarde = document.getElementById('volarde').value;
    const volarpara = document.getElementById('volarpara').value;
    try {
        if(!expresionvolar.test(volarde) || !expresionvolar.test(volarpara)){
            throw 'Ingrese un destino valido'

        }
        if (new Date(returning) < fechaActual || new Date(departing) < fechaActual) {
            throw 'Error'
        }

        if (new Date(departing) > new Date(returning)) {
            throw 'Error'
        }
        alert('Se realizo el registro exitosamente')
    } catch (e) {
        alert(e)
    }
})
