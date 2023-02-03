var num1 = "", operator = "", num2 = "";
var p = document.getElementById("p");

var array = document.querySelectorAll(".operation");
for (let index = 0; index < array.length; index++) {
    let element = array[index];
    element.addEventListener("click", function () {
        num2 = p.innerHTML.slice(num1.length + 1);
        if (element.innerHTML != "=") {
            if (num1 == "") {
                num1 = p.innerHTML;
            } else {
                p.innerHTML = Operation(parseFloat(num1), parseFloat(num2));
                num1 = p.innerHTML;
                num2 = "";
            }
            operator = element.innerHTML;
        }
        else {
            if (num2 != "") {
                p.innerHTML = Operation(parseFloat(num1), parseFloat(num2));
                num1 = "", operator = "", num2 = "";
            }
        }
    });
}

array = document.querySelectorAll(".calculator > div:not(#C)");
for (let index = 0; index < array.length; index++) {
    let element = array[index];
    element.addEventListener("click", function () {
        if (p.innerHTML != "0") {
            if (num1 == "") {
                if (p.innerHTML.length < 8) {
                    if (element.innerHTML != "=") {
                        p.innerHTML = p.innerHTML + element.innerHTML;
                    }
                }
            } else {
                if (p.innerHTML.length - num1.length - 1 < 8)
                    p.innerHTML = p.innerHTML + element.innerHTML;
            }
        }
        else {
            p.innerHTML = element.innerHTML;
        }
    });
}

document.getElementById("C").addEventListener("click", function () {
    if (p.innerHTML.length > 1) {
        if (p.innerHTML.length > num1.length + 1) {
            p.innerHTML = p.innerHTML.slice(0, -1);
        }
    }
    else {
        p.innerHTML = "0"
    }
});

document.getElementById("AC").addEventListener("click", function () {
    p.innerHTML = "0";
    num1 = "", operator = "", num2 = "";
});

function Operation(n1, n2) {
    let n = 0;
    switch (operator) {
        case "+":
            n = n1 + n2;
        case "-":
            n = n1 - n2;
        case "x":
            n = n1 * n2;
        case "/":
            n = n1 / n2;
    }
    n = n.toString();
    if (n.length > 8) {
        return 'ERR';
    } else {
        return n;
    }
}