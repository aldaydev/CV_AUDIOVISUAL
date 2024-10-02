window.addEventListener("DOMContentLoaded", (event) =>{

    let nav_btn = document.querySelector(".menu-toggle__link");
    let nav_menu = document.querySelector(".layout__aside");
    let nav_bars = document.querySelector(".menu-toggle__icon");

    function ocultar () {
        nav_menu.classList.remove("visible");
        nav_menu.style.right = "-80%";
        nav_btn.style.background = "var(--color-secondary)";
        nav_bars.style.color = "var(--color-principal)";

        return true;
    }

    nav_btn.addEventListener("click", (event) => {
        let visible = document.querySelector(".visible");

        if(!visible) {
            nav_menu.classList.add("visible");
            nav_menu.style.right = 0;
            nav_btn.style.background = "var(--color-principal)";
            nav_bars.style.color = "var(--color-text)";
        }else{
            ocultar();
        }
    });

    window.addEventListener("resize", () => {
        let size = parseInt(document.body.clientWidth);

        if(size <= 1023){
            ocultar();
        }

    });

});