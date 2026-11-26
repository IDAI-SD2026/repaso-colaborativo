# 🛒 Proyecto Colaborativo: Plataforma de Cotizadores Web

Repositorio oficial de repaso para el examen final (**HTML5 • CSS3 • JavaScript**).  
Cada alumno desarrollará un módulo cotizador independiente y lo integrará al menú principal utilizando **ramas (`branches`)** y **Pull Requests (`PR`)** en GitHub.

---

## 📋 Reglas de Oro en GitHub (¡Leer antes de empezar!)

1. **Prohibido hacer `push` directo a `main`.** Todo cambio entra mediante *Pull Request*.
2. **No borres ni edites los archivos de tus compañeros** ni los archivos `plantilla.*`.
3. **Nombra tus archivos con tu nombre:**
   * `nombrealumno1-tema.html`
   * `nombrealumno1-tema.css`
   * `nombrealumno1-tema.js`
4. **Antes de iniciar cada nuevo Sprint**, actualiza tu copia local desde `main`:
   ```bash
   git checkout main
   git pull origin main

## 📅 Cronograma de Entregas (6 Sesiones de 45 min)

### 🔹 Sprint 1: Estructura y Formularios HTML5 (Jueves y Viernes)
* **Rama:** `html/nombrealumno1` (ej. `html/fernando`)
* **Tarea:**
  1. Copia `plantilla.html` y renómbralo según tu tema (ej. `fernando-cine.html`).
  2. Adapta el formulario con `<fieldset>`, `<legend>`, `<label>` vinculado (`for`/`id`), `input` (`text`, `number`, `radio`, `checkbox`) y `<select>`.
  3. Agrega el enlace a tu página dentro de la lista `<ul>` en `index.html`.
  4. Sube tu rama y abre un **Pull Request** hacia `main` al finalizar el Viernes.

### 🔹 Sprint 2: Diseño Responsive con Flexbox y Color (Lunes y Martes)
* *(Nota: El miércoles no hay actividad de repaso por exposiciones).*
* **Rama:** `css/nombrealumno1` (ej. `css/fernando`)
* **Tarea:**
  1. Copia `plantilla.css`, renómbralo (ej. `fernando-cine.css`) y enlázalo en tu HTML.
  2. Cambia la paleta de colores en `:root` acorde a la identidad visual de tu tema.
  3. Usa **Flexbox** (`display: flex`, `justify-content`, `align-items`, `gap`) para organizar los campos y opciones.
  4. Asegura que el diseño sea **100% responsive** en pantallas menores a `600px` usando `@media`.
  5. Abre tu **Pull Request** al finalizar el Martes.

### 🔹 Sprint 3: Lógica de Precios con JavaScript (Jueves y Viernes)
* **Rama:** `js/nombrealumno1` (ej. `js/fernando`)
* **Tarea:**
  1. Copia `plantilla.js`, renómbralo (ej. `fernando-cine.js`) y enlázalo en tu HTML.
  2. Usa **exclusivamente** eventos `click`, variables, operadores aritméticos y condicionales `if / else if / else`.
  3. Programa el cálculo: `(Precio Base + Extras) * Cantidad`.
  4. Implementa **mínimo 2 reglas con `if / else`**:
     * *Validación:* Si el nombre está vacío o la cantidad es `<= 0`, mostrar mensaje de error y detener el cálculo.
     * *Regla de negocio:* Descuento por volumen (ej. 10% si compra 5 o más) y cargo adicional según el `<select>`.
  5. Abre tu **Pull Request** final el Viernes.

---

## 🎯 Catálogo de Temas (Elige 1 opción por equipo)

*Cada equipo debe elegir un tema distinto y registrarlo en clase para no repetir.*

|Asignado| # | Tema del Cotizador | Opciones Base (`radio`) | Extras (`checkbox`) | Entrega / Modalidad (`select`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Jesed** | **1** | 🍕 **Pizzería Artesanal** | Tamaño: Mediana ($150) / Familiar ($220) | Orilla de queso (+$35), Pepperoni extra (+$25) | Comer aquí (Gratis) / A domicilio (+$40) |
| None | **2** | 🎬 **Boletos de Cine** | Sala: Tradicional ($85) / VIP ($160) | Combo Palomitas (+$90), Lentes 3D (+$25) | Función Matiné (Gratis) / Estreno Nocturno (+$20) |
| **Fernando** | **3** | 💻 **Armado de PC Gamer** | Gama: Entrada ($12,000) / Ultra ($25,000) | Monitor 144Hz (+$3,500), Teclado Mecánico (+$1,200) | Recoger en sucursal (Gratis) / Envío asegurado (+$350) |
| **Gilberto** | **4** | ✈️ **Agencia de Viajes** | Paquete: Mochilero ($3,500) / Todo Incluido ($7,800) | Seguro de viajero (+$450), Tour guiado (+$800) | Temporada Baja (Gratis) / Temporada Alta (+$1,200) |
| **Dusting** | **5** | ☕ **Cafetería de Especialidad** | Tamaño: Mediano ($55) / Grande ($70) | Leche de almendra (+$15), Shot extra de café (+$12) | Para llevar (Gratis) / Servicio a oficina (+$25) |
| None | **6** | 🏋️ **Membresía de Gimnasio** | Plan: Básico ($450) / Black Total ($750) | Acceso a alberca (+$150), Entrenador personal (+$300) | Pago mensual (Gratis) / Inscripción inmediata (+$200) |
| None | **7** | 🐶 **Estética y Spa Canino** | Mascota: Razas chicas ($250) / Razas grandes ($400) | Corte de uñas (+$60), Baño antipulgas (+$110) | Llevar a clínica (Gratis) / Transporte mascota (+$80) |
| None | **8** | 🎮 **Renta de Consolas / Torneo** | Equipo: Consola estándar ($120/hr) / Simulador VR ($220/hr) | Control extra (+$40), Bebidas y snacks (+$75) | Reserva entre semana (Gratis) / Fin de semana (+$50) |
| **Britany** | **9** | 🎂 **Pastelería Personalizada** | Porciones: 10 personas ($380) / 25 personas ($650) | Relleno de Nutella (+$90), Letrero fondant (+$70) | Recoger en taller (Gratis) / Entrega refrigerada (+$100) |
| **Arnold** | **10** | 🚗 **Autolavado Detailing** | Servicio: Lavado Express ($140) / Encerado Completo ($320) | Aspirado profundo (+$60), Lavado de motor (+$150) | Turno normal (Gratis) / Servicio Express sin fila (+$50) |
