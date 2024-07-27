let deposit = parseFloat(prompt("your deposit"));

let rate = 0.05;


function calculateAmount(deposit, rate, years) {
    return deposit * Math.pow(1 + rate, years);
}


let amount1Year = calculateAmount(deposit, rate, 1);
let amount2Years = calculateAmount(deposit, rate, 2);
let amount3Years = calculateAmount(deposit, rate, 3);

let resultMessage = "Сумма вклада через год: " + amount1Year + "\n" +
                    "Сумма вклада через два года: " + amount2Years + "\n" +
                    "Сумма вклада через три года: " + amount3Years

alert(resultMessage)