const circle = document.querySelector(".circle");
const minicircle = document.querySelector(".minicircle");

minicircle.fillStyle = "aqua";

document.body.addEventListener("mousemove", function (e) {
    (circle.style.left = e.clientX + "px"), (circle.style.top = e.clientY + "px");
    (minicircle.style.left = e.clientX + "px"), (minicircle.style.top = e.clientY + "px");
});
