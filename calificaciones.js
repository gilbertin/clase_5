// A Daniel le acaban de mandar una lista con sus calificaciones, quiere saber si su promedio es suficiente para 
// tener una beca este año, el promedio mínimo que necesita es 8, el programa recibirá la cantidad de calificaciones 
// y un arreglo de calificaciones para poder calcular el resultado

let sumaCalificaciones = 0;
const calificaciones =[9, 9, 8];

for (let index = 0; index < calificaciones.length; index++){
    sumaCalificaciones += calificaciones[index]; 
} 
const prom = sumaCalificaciones / calificaciones.length; 

if (prom >= 8){
    console.log("Aprobado");
}else{
    console.log('No Aprobado');
} 

