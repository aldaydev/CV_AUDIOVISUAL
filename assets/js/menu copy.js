window.addEventListener("DOMContentLoaded", (event) =>{

    let nav_btn = document.querySelector(".menu-toggle__link");
    let nav_menu = document.querySelector(".layout__aside");
    let nav_bars = document.querySelector(".menu-toggle__icon");

    nav_btn.addEventListener("click", (event) => {
        let visible = document.querySelector(".visible");

        if(!visible) {
            nav_menu.classList.add("visible");
            nav_menu.style.right = 0;
            nav_btn.style.background = "var(--color-principal)";
            nav_bars.style.color = "var(--color-text)";
        }else{
            nav_menu.classList.remove("visible");
            nav_menu.style.right = "-70%";
            nav_btn.style.background = "var(--color-secondary)";
            nav_bars.style.color = "var(--color-principal)";
        }
    });

    window.addEventListener("resize", () => {
        let size = parseInt(document.body.clientWidth);

        if(size <= 1023){
            nav_menu.classList.remove("visible");
            nav_menu.style.right = "-70%";
            nav_btn.style.background = "var(--color-secondary)";
            nav_bars.style.color = "var(--color-principal)";
        }

    });

});