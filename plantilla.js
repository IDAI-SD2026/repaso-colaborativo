// =================================================================
// SPRINT 3 (Jueves 2 y Viernes 2): JAVASCRIPT BÁSICO
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
  if (nombre === '' || cantidad <= 0) {
    cajaResultado.style.backgroundColor = '#fee2e2';
    cajaResultado.style.color = '#991b1b';
    cajaResultado.textContent = '⚠️ Error: Ingresa tu nombre y una cantidad mayor a 0.';
    return; // Detiene el cálculo aquí
  }

  // Determinar precio base según el radio seleccionado
  let precioBase = 0;
  const planBasico = document.getElementById('planBasico');
  const planPremium = document.getElementById('planPremium');

  if (planBasico.checked) {
    precioBase = 100;
  } else if (planPremium.checked) {
    precioBase = 200;
  }

  // Sumar extras si los checkbox están marcados
  let costoExtras = 0;
  const extra1 = document.getElementById('extra1');
  const extra2 = document.getElementById('extra2');

  if (extra1.checked) {
    costoExtras = costoExtras + 30;
  }
  if (extra2.checked) {
    costoExtras = costoExtras + 50;
  }

  // Cálculo del subtotal
  let total = (precioBase + costoExtras) * cantidad;

  // CONDICIONAL 2: Regla de descuento por volumen (5 o más unidades)
  let mensajeDescuento = '';
  if (cantidad >= 5) {
    const descuento = total * 0.10; // 10% de descuento
    total = total - descuento;
    mensajeDescuento = ' (¡Incluye 10% de descuento por volumen!)';
  }

  // CONDICIONAL 3: Cargo extra por método de entrega
  const tipoEntrega = document.getElementById('tipoEntrega').value;
  if (tipoEntrega === 'domicilio') {
    total = total + 40;
  }

  // Mostrar resultado final en pantalla
  cajaResultado.style.backgroundColor = '#dcfce7';
  cajaResultado.style.color = '#166534';
  cajaResultado.textContent =
    '✅ Hola ' + nombre + ', el total a pagar por ' + cantidad + ' unidad(es) es: $' + total + mensajeDescuento;
});
