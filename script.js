let display = document.getElementById("text")
let trailingresult = 0;
let clear = document.getElementById("clear")
let del = document.getElementById("delete")
let operators = ["add", "divide", "subtract", "multiply"]
let working = ""

function update(input) {
    if (display.innerHTML === "0" && operators.indexOf(input) === -1 && input !== "decimal" && input !== "negate" && input !== "equals") {
                display.innerHTML = input;
    } else if (operators.indexOf(input) >= 0) {
        if (working === "") {
            working = input
            trailingresult = display.innerHTML
            display.innerHTML = 0;
        } else {
            trailingresult = calculate(trailingresult, display.innerHTML, working)
            display.innerHTML = 0;
            working = input
        }
    } else if(input === "decimal") {
        if (display.innerHTML.includes(".")) {
   
        } else {
                display.innerHTML += "."
        }
    } else if(input === "negate") {
     if (display.innerHTML.includes("-")) {
        return display.innerHTML = display.innerHTML.replace("-", "")
     } else {
        return display.innerHTML = "-" + display.innerHTML
     }
    }
    else if (input === "equals") {
        display.innerHTML = calculate(parseFloat(trailingresult), parseFloat(display.innerHTML), working)
        trailingresult = display.innerHTML
        working = ""
    } else {
                display.innerHTML += input;
            }
    }



clear.addEventListener("click", () => {
    display.innerHTML = "0"
})

del.addEventListener("click", () => {
    if (display.innerHTML === "0") {
        display.innerHTML = 0;
    } else {
        display.innerHTML = display.innerHTML.toString().slice(0, -1)
    }

    if (display.innerHTML < 1 || display.innerHTML < 0) {
        display.innerHTML = 0;
    }
})

function calculate(firstnumber, secondnumber, operation) {
    let result;

    firstnumber = parseFloat(firstnumber)
    secondnumber = parseFloat(secondnumber)
    switch (operation) {
        case "add":
            result = firstnumber + secondnumber
            break;
        case "subtract":
            result = firstnumber - secondnumber
            break;
        case "divide":
            result = firstnumber / secondnumber
            break;
        case "multiply":
            result = firstnumber * secondnumber
            break;
        default:
            console.log("switch missed something")
    }
    return result.toString();
}
