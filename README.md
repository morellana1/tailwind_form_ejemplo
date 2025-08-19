# Proyecto Demo: Formulario con Tailwind CSS, Dark Mode y JS

Este es un proyecto demostrativo creado para los alumnos de 2do Año de la Tecnicatura Superior en Desarrollo de Software FullStack del **ITS Cipolletti**. El objetivo es ilustrar conceptos clave del desarrollo front-end utilizando herramientas modernas como Tailwind CSS y JavaScript para la manipulación del DOM.



---

### 📚 Temas Cubiertos

*   **Maquetación con Tailwind CSS:** Creación de un layout responsive y moderno utilizando clases de utilidad.
*   **Formularios Estilizados:** Diseño de un formulario de registro completo, atractivo y accesible.
*   **Implementación de Dark Mode:** Cómo añadir un tema oscuro de forma sencilla con Tailwind CSS, utilizando el sistema de prefijos `dark:`.
*   **Captura de Datos con JavaScript:** Manejo del evento `submit` de un formulario para recolectar los datos ingresados por el usuario y mostrarlos en la consola como un objeto.

---

### 🌱 Evolución del Proyecto

El proyecto está pensado para desarrollarse en etapas, facilitando así el aprendizaje progresivo:

1.  **Maquetación Base (HTML + Tailwind):** Se parte de un archivo `index.html` que contiene la estructura del formulario y los estilos base para el tema claro. Se utiliza Tailwind CSS a través de su CDN para agilizar la demostración.

2.  **Implementación de Dark Mode:** Se explica cómo configurar y utilizar el modo oscuro en Tailwind. Esto implica añadir la clase `dark` al elemento `<html>` y luego usar variantes como `dark:bg-gray-900` para aplicar estilos específicos para el tema oscuro.

3.  **Lógica del Formulario (JavaScript):** Se añade un script para capturar el evento de envío del formulario. En el script, se previene el comportamiento por defecto (que recargaría la página), se utiliza el objeto `FormData` para recolectar todos los datos de manera eficiente, se convierte a un objeto simple de JavaScript y, finalmente, se imprime en la consola del navegador.

---

### 🚀 Cómo Empezar

1.  Clona o descarga el repositorio.
2.  Abre el archivo `index.html` en tu navegador web preferido.
3.  Para ver la funcionalidad de captura de datos, abre las herramientas de desarrollador (usualmente con `F12` o `Ctrl+Shift+I`) y dirígete a la pestaña **"Consola"**.
4.  Rellena el formulario y haz clic en "Registrarse" para ver el objeto con los datos en la consola.

---

### 💻 Fragmentos de Código Clave

#### JavaScript para Captura de Datos

Este código se puede añadir dentro de una etiqueta `<script>` al final del `<body>`.

```javascript
// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona el formulario por su ID
  const dataForm = document.getElementById('dataForm');

  // Añade un listener para el evento 'submit'
  dataForm.addEventListener('submit', (event) => {
    // Previene el comportamiento por defecto del formulario (recargar la página)
    event.preventDefault();

    // Crea un objeto FormData a partir del formulario
    const formData = new FormData(dataForm);

    // Convierte FormData a un objeto simple para facilitar su manejo
    const formObject = Object.fromEntries(formData.entries());

    // Imprime el objeto con los datos en la consola
    console.log('Datos del formulario:', formObject);

    // Opcional: Muestra una alerta al usuario y resetea el formulario
    alert('¡Gracias por registrarte! Revisa la consola para ver los datos.');
    dataForm.reset();
  });
});
```

---

### 👨‍💻 Autor

*   **Matias Orellana**
*   Para 2do FullStack @ **ITS Cipolletti** 2025