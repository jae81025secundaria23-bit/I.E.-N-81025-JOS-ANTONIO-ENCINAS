document.addEventListener("DOMContentLoaded", () => {
    const btnNosotros = document.getElementById("btnNosotrosIndividual");
    const menuNosotros = document.getElementById("menuNosotrosIndividual");
    const menuToggle = document.getElementById("menuToggleMobile");
    const menuPrincipal = document.getElementById("menuPrincipalNav");

    // --- ACCIÓN DEL DROPDOWN (NOSOTROS) ---
    if (btnNosotros && menuNosotros) {
        btnNosotros.addEventListener("click", (e) => {
            e.stopPropagation(); // Evita que se cierre al hacer click sobre sí mismo
            menuNosotros.classList.toggle("show");
        });
    }

    // --- ACCIÓN DEL MENÚ HAMBURGUESA (CELULAR) ---
    if (menuToggle && menuPrincipal) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            menuPrincipal.classList.toggle("active");
        });
    }

    // --- CERRAR TODO SI SE HACE CLICK FUERA ---
    document.addEventListener("click", (e) => {
        // Cerrar dropdown si el click fue afuera
        if (menuNosotros && menuNosotros.classList.contains("show")) {
            if (!btnNosotros.contains(e.target) && !menuNosotros.contains(e.target)) {
                menuNosotros.classList.remove("show");
            }
        }
        // Cerrar menú móvil si el click fue afuera
        if (menuPrincipal && menuPrincipal.classList.contains("active")) {
            if (!menuToggle.contains(e.target) && !menuPrincipal.contains(e.target)) {
                menuPrincipal.classList.remove("active");
            }
        }
    });
});
