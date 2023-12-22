var counter = 0;

function onclickButton (el) {
    counter++;
    el.innerHTML = "Вы нажали на кнопку: " + counter;
    el.style.background = "red";
    el.style.color = "blue";
    console.log();
}