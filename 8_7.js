// Crea un algoritmo que imprima la temperatura más alta

let temp_max = 0;
const temperatura = [
    19, 24, 25, 30, 10];
// console.log(temperatura.length)
for (let i = 0; i < temperatura.length; i++) {
   if (temperatura[i] >= temp_max){
       temp_max = temperatura[i];
}
}
console.log(temp_max)
