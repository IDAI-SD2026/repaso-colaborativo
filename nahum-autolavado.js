
var boton = document.getElementById('btnCalcular');
var resultado = document.getElementById('resultadoCotizacion');


boton.addEventListener('click', function() {


    var nombre = document.getElementById('nombre').value;
    var cantidad = Number(document.getElementById('vehiculos').value);


    if (nombre == '' || cantidad <= 0) {
        resultado.textContent = 'Ingresa tu nombre y una cantidad valida.';
    } 
    else {


        var precio = 140;

        if (document.getElementById('servicioCompleto').checked) {
            precio = 320;
        }


        var extras = 0;

        if (document.getElementById('extraInteriores').checked) {
            extras = extras + 60;
        }

        if (document.getElementById('extraTratamiento').checked) {
            extras = extras + 150;
        }


        var total = (precio + extras) * cantidad;


        if (cantidad >= 5) {
            total = total - (total * 0.10);
        }


        if (document.getElementById('horario').value == '50') {
            total = total + 50;
        }
        else {
            total = total;
        }


        resultado.textContent = 'Hola ' + nombre + ', tu total es de $' + total + ' MXN.';
    }

});
