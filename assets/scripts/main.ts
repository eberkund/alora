import "bootstrap.native/dist/bootstrap-native.esm.min.js";
import "autotrack";

const togglers = document.getElementsByClassName("hamburger");
for (const toggle of togglers) {
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("is-active");
    });
}
