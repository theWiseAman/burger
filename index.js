var status = false;
function toggle() {
    let popup = document.getElementsByClassName('grey');
    
    popup.classList('show');
}
window.onload = function() {
    var button = document.getElementsByTagName('button');
    button.addEventListener('click', toggle);
    var popup = document.getElementsByClassName('grey');
    popup.addEventListener('click', toggle);
}