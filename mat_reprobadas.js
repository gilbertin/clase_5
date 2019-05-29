let mat_reprobadas = 0;
const calificaciones =[9, 9, 8, 5, 6, 3];

for (let index = 0; index < calificaciones.length; index++){
    if (calificaciones[index] <= 6) {
    mat_reprobadas++; 
    }
    // console.log(mat_reprobadas)
} 

console.log('Total de Materias Reprobadas: ' + mat_reprobadas)



// const prom = mat_reprobadas / calificaciones.length; 

// if (prom >= 8){
//     console.log("Aprobado");
// }else{
//     console.log('No Aprobado');
// }  