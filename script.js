document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------
    // 1) DARK MODE LOGIC
    // -------------------------------
    const html = document.documentElement;    // <html>
    const toggle = document.getElementById("darkToggle");
    const dot = document.getElementById("switchDot");
    const modeText = document.getElementById("mode_text");


    // Tema inicial: localStorage o preferencia del sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const saved = localStorage.getItem("theme"); // "dark" | "light" | null
    const start = saved ?? (prefersDark ? "dark" : "light");

    applyTheme(start);

    // Escuchar cambios del toggle
    toggle.addEventListener("change", () => {
        applyTheme(toggle.checked ? "dark" : "light");
    });

    // Función de aplicación de tema
    function applyTheme(mode) {
        const isDark = mode === "dark";
        html.classList.toggle("dark", isDark);
        toggle.checked = isDark;
        dot.classList.toggle("translate-x-5", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
        modeText.textContent = isDark ? "Modo Oscuro" : "Modo Claro";
    }

    // -------------------------------
    // 2) FORMULARIO LOGIC
    // -------------------------------
    const form = document.getElementById("dataForm"); // capturamos el <form>

    // Escuchamos el evento submit (cuando el usuario hace clic en "Enviar")
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // prevenimos que se recargue la página por defecto

        // 2.1) Capturamos los valores de cada campo
        const nombre = document.getElementById("firstName").value;
        const email = document.getElementById("email").value;


        // 2.2) Creamos un objeto con esos datos
        const formData = {
            nombre: nombre,
            email: email,
            fecha: new Date().toLocaleString(), // opcional: fecha/hora del envío
        };

        // 2.3) Mostramos el objeto en consola
        console.log("Objeto con los datos del formulario:");
        console.log(formData);

        // 2.4) (Opcional) resetear el formulario
        form.reset();
    });
});