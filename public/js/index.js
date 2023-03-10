// execute script after page load
window.onload = function digital_fn() {

    // toggle button
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");
    let nav = document.querySelector("#navbarSupportedContent");

    toggle.addEventListener('click', function (event) {
        collapse.classList.toggle('active')
        // console.log(toggle)
    });
    nav.addEventListener('click', function (event) {
        collapse.classList.remove('active')
        // console.log(toggle)
    });

}
