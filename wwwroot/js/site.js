// Get the main and secondary number
let main = document.getElementById('main'), sec = document.getElementById('sec');

// Display clicked number
let numbers = document.querySelectorAll(".number");
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", function () {
        if (main.innerHTML.length < 8) {
            if (main.innerHTML == "0" || main.innerHTML == "ERR")
                main.innerHTML = number.innerHTML;
            else
                main.innerHTML = main.innerHTML + number.innerHTML;
        }
    });
}

// Clear the main number
document.getElementById('C').addEventListener("click", function () {
    main.innerHTML = "0";
});

// Clear all the display
document.getElementById('AC').addEventListener("click", function () {
    main.innerHTML = "0";
    sec.innerHTML = "0";
    sec.style.display = "none";
});

// Insert dot in number
document.getElementById(".").addEventListener("click", function () {
    let isValid = true;
    for (const index of main.innerHTML) {
        if (!parseFloat(index) && index != "0" || main.innerHTML.length >= 8)
            isValid = false;
    }
    if (isValid)
        main.innerHTML = main.innerHTML + ".";
});

// Makes the number positive or negative
document.getElementById("sign").addEventListener("click", function () {
    let isPositive = Math.sign(parseInt(main.innerHTML));
    if (isPositive == 1)
        main.innerHTML = "-" + main.innerHTML;
    else if (isPositive == -1)
        main.innerHTML = main.innerHTML.slice(1);
});

// Display the operation
let operations = document.querySelectorAll(".operation");
for (let i = 0; i < operations.length; i++) {
    let operation = operations[i];
    operation.addEventListener("click", function () {
        if (sec.innerHTML == "0") {
            sec.style.display = "block";
            sec.innerHTML = main.innerHTML + operation.innerHTML;
        }
        else {
            let main_num = parseFloat(main.innerHTML);
            let sec_num = parseFloat(sec.innerHTML);
            main.innerHTML = Operation(sec_num, sec.innerHTML.slice(-1), main_num);
            sec.innerHTML = Operation(sec_num, sec.innerHTML.slice(-1), main_num) + operation.innerHTML;
        }
    });
}

// Executes operation
function Operation(n1, operation, n2) {
    let n = 0;
    switch (operation) {
        case "+":
            n = n1 + n2;
            break;
        case "-":
            n = n1 - n2;
            break;
        case "x":
            n = n1 * n2;
            break;
        case "/":
            n = n1 / n2;
            break;
    }
    n = n.toString();
    if (n.length > 8)
        return 'ERR';
    else
        return n;
}