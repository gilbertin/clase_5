
// A Daniel le acaban de mandar una lista con sus calificaciones, quiere saber si su promedio es suficiente para 
// tener una beca este año, el promedio mínimo que necesita es 8, el programa recibirá la cantidad de calificaciones 
// y un arreglo de calificaciones para poder calcular el resultado

const alumno = {
    nombre: "Daniel",
    calificaciones: [9, 9, 8, 8, 9]
}

// console.log(alumno.calificaciones)

function sumaCalificaciones(calificaciones){
    let suma = 0
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma
}
const SumCali = sumaCalificaciones(alumno.calificaciones) 
const promedio = SumCali / alumno.calificaciones.length
// if (promedio <= 6) {
//             console.log("el promedio de es de: " + promedio )
//         }
if ( promedio <= 6){
    console.log('no tienes promedio para obtener la Beca y tu promedio es de: ' + promedio)
}else{
    console.log('si tienes promedio para la Beca y tu promedio es: ' + promedio)
}
// console.log('no tienes promedio para obtener la Beca')
// console.log('el promedio es de : ' + promedio)

// for (let i = 0 ; i < alumnos.length; i++ ) {
//     const calificaciones = alumnos[i].calificaciones;
//     let suma = 0
    
//     for (let n = 0; n < calificaciones.length; n++ ){
//         suma += calificaciones[n]
//     }
// // console.log(suma)
//     const promedio = suma / calificaciones.length
//     if (promedio <= 6) {
//         console.log(alumnos[i].name + " esta reprobado")
//     }
// }
