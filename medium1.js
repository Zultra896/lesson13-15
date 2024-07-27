let celsius = parseFloat(prompt("Введите температуру в градусах Цельсия:"));

let fahrenheit = (celsius * 9/5) + 32

let kelvin = celsius + 273.15

let resultMessage = "Температура в градусах Фаренгейта: " + fahrenheit + "\n" +
                    "Температура в градусах Кельвина: " + kelvin

alert(resultMessage)