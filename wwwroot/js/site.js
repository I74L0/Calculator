var p = document.getElementById("p");
var array = document.querySelectorAll(".calculator > div:not(#C)");
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    element.addEventListener("click", function () {
        if (p.innerHTML.length < 8) {
            if (p.innerHTML == "0")
                p.innerHTML = element.firstChild.nodeValue;
            else
                p.innerHTML = p.innerHTML + element.firstChild.nodeValue;
        }
    });
}

document.getElementById("C").addEventListener("click", function () {
    try {
        if (p.innerHTML != "0")
            p.innerHTML = p.innerHTML.slice(0, -1);
    } catch (error) {
        return;
    }
});
document.getElementById("AC").addEventListener("click", function () {
    p.innerHTML = "0";
});