
// =================================================================
// SPRINT 3: JAVASCRIPT BÁSICO
// Reglas: Solo usar eventos click, variables, cálculos y if / else
// =================================================================

// 1. Capturamos el botón y la caja de resultado
const btnCalcular = document.getElementById('btnCalcular');
const cajaResultado = document.getElementById('cajaResultado');

// 2. Escuchamos el evento CLICK en el botón
btnCalcular.addEventListener('click', function () {

  // Leer valores de los inputs
  const nombre = document.getElementById('nombreCliente').value;
  const cantidad = Number(document.getElementById('cantidad').value);

  // CONDICIONAL 1: Validación de errores
  if (nombre.trim() === '' || cantidad <= 0 || !Number.isInteger(cantidad) || cantidad > 20) {

    cajaResultado.style.backgroundColor = '#fee2e2';
    cajaResultado.style.color = '#991b1b';

    cajaResultado.textContent =
      'Error: Ingresa tu nombre y una cantidad entera entre 1 y 20.';

    return;

  } else {

    // Determinar precio base según el paquete seleccionado
    let precioBase = 0;

    const paqueteMochilero = document.getElementById('paqueteMochilero');
    const paqueteTodoIncluido = document.getElementById('paqueteTodoIncluido');

    if (paqueteMochilero.checked) {

      precioBase = 3500;

    } else if (paqueteTodoIncluido.checked) {

      precioBase = 7800;

    } else {

      cajaResultado.style.backgroundColor = '#fee2e2';
      cajaResultado.style.color = '#991b1b';
      cajaResultado.textContent = 'Error: Selecciona un paquete de viaje.';

      return;

    }

    // Sumar extras si los checkbox están marcados
    let costoExtras = 0;

    const seguro = document.getElementById('seguro');
    const tour = document.getElementById('tour');

    if (seguro.checked) {
      costoExtras = costoExtras + 450;
    }

    if (tour.checked) {
      costoExtras = costoExtras + 800;
    }

    // Cálculo del subtotal
    let total = (precioBase + costoExtras) * cantidad;

    // CONDICIONAL 2: Descuento por volumen (5 o más viajeros)
    let mensajeDescuento = '';

    if (cantidad >= 5) {

      const descuento = total * 0.10;
      total = total - descuento;

      mensajeDescuento = ' ¡Incluye 10% de descuento por volumen!';

    } else if (cantidad < 5) {

      mensajeDescuento = ' No aplica descuento por volumen.';

    }

    // CONDICIONAL 3: Cargo extra por temporada
    const tipoTemporada = document.getElementById('tipoTemporada').value;

    if (tipoTemporada === 'alta') {

      total = total + (1200 * cantidad);

    } else if (tipoTemporada === 'baja') {

      total = total;

    } else {

      cajaResultado.style.backgroundColor = '#fee2e2';
      cajaResultado.style.color = '#991b1b';
      cajaResultado.textContent = 'Error: Selecciona una temporada.';

      return;

    }

    // Mostrar resultado final en pantalla
    cajaResultado.style.backgroundColor = '#dcfce7';
    cajaResultado.style.color = '#166534';

    cajaResultado.textContent =
      'Hola ' + nombre +
      ', el total a pagar por ' + cantidad +
      ' viajero(s) es: $' +
      total.toLocaleString('es-MX', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }) + '.' + mensajeDescuento;

  }

});

