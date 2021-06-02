function show() {
    let grey = document.getElementById('grey');
    grey.addEventListener("click", hide);
    let popup = document.getElementById('popUp')
    popup.removeEventListener("click", hide);

    grey.classList.add("show");
    grey.classList.remove("hide");
}
function hide() {
    let grey = document.getElementById('grey');
    
    grey.classList.add("hide");
    grey.classList.remove("show");
}
window.onload = function() {
    var button = document.getElementById('button');
    button.addEventListener("click", show);
}