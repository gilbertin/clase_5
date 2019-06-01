const arreglo = [
    [1, 2 ,3 ,4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
let suma = 0

for (let index = 0; index < arreglo.length; index++){
    for (let index2 = 0; index2 < arreglo[index].length; index2++) {
        suma += arreglo[index][index2]
    }
}
console.log(suma)

