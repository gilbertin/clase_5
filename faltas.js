// Joel quiere ver el porcentaje de veces que falto a clases, el programa recibirá la cantidad de asistencias y
// un arreglo de asistencias para poder calcular el resultado, cada elemento esta representado por un valor booleano

var asistencias = [false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true];
let numFaltas = 0;

for (let i = 0; i < asistencias.length; i++) {
    if (!asistencias[i]) {
        numFaltas += 1;
        

    }
}
const porcentaje = numFaltas / asistencias.length * 100;

console.log(porcentaje);

// let sumaCalificaciones = 0;
// const calificaciones =[5, 6, 8];

// for (let index = 0; index < calificaciones.length; index++){
//     sumaCalificaciones += calificaciones[index]
// } 
// const prom = sumaCalificaciones / calificaciones.length

// if (prom >= 4){
//     console.log("Aprobado");
// }else{
//     console.log('No Aprobado')
// } 
