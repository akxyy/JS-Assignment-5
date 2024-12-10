// 3.Create a toggle button, console the values as either true/ false when toggled.
const button = document.getElementById("toggleButton");
isToggled = false;
button.addEventListener("click", function (event) {
    if (isToggled == false) {
        isToggled = true;
        console.log(isToggled);
    }
    else {
        isToggled = false;
        console.log(isToggled);
    }
});