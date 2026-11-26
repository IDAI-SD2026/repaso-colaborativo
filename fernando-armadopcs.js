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
  const planPro = document.getElementById('planPro');
  const planUltra = document.getElementById('planUltra');

  if (planBasico.checked) {
    precioBase = 12000;
  } else if (planPremium.checked) {
    precioBase = 20000;
  }
  else if (planPro.checked) {
    precioBase = 35000;
  }
  else if (planUltra.checked) {
    precioBase = 65000;
  }

  // Sumar extras si los checkbox están marcados
  let costoExtras = 0;
  const monitor144 = document.getElementById('monitor144');
  const tecladomec = document.getElementById('tecladomec');
  const win11 = document.getElementById('win11');
  const office = document.getElementById('office');
  const ram = document.getElementById('+RAM');
  const refliquida = document.getElementById('refliquida');

  if (monitor144.checked) {
    costoExtras = costoExtras + 7700;
  }
  if (tecladomec.checked) {
    costoExtras = costoExtras + 2500;
  }
  if (win11.checked) {
    costoExtras = costoExtras + 5000;
  }
  if (office.checked) {
    costoExtras = costoExtras + 3000;
  }
  if (ram.checked) {
    costoExtras = costoExtras + 1900;
  }
  if (refliquida.checked) {
    costoExtras = costoExtras + 5900;
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
    total = total + 250;
  }

  // Mostrar resultado final en pantalla
  cajaResultado.style.backgroundColor = '#dcfce7';
  cajaResultado.style.color = '#166534';
  cajaResultado.textContent =
    '✅ Hola ' + nombre + ', el total a pagar por ' + cantidad + ' unidad(es) es: $' + total + mensajeDescuento;
});
