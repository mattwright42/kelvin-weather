// constant temperature in Kelvin
const kelvin = 293;
// celsius temperature is equal to Kelvin - 273
let celsius = kelvin - 273;
// conversion of celsius to fahrenheit
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

let newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);
