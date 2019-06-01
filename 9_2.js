// Joel quiere ver el porcentaje de veces que falto a clases, el programa recibirá la cantidad de asistencias y 
// un arreglo de asistencias para poder calcular el resultado, cada elemento esta representado por un valor booleano

const alumno = {
    nombre: "Daniel",
    faltas: [true, false, true, true, false, false]
}

function sumaFaltas(faltas){
    let suma = 0
    for (let i = 0; i < faltas.length; i++) {
        if (alumno.faltas[i]){
            suma += 1
        }
    }
    return suma
}
const SumFaltas = sumaFaltas(alumno.faltas) 
// const promedio = SumFaltas / alumno.faltas.length


console.log('el numero de ' + alumno.nombre + ' faltas que tiene: ' + SumFaltas)
// console.log('promedio de faltas que tiene: ' + promedio)




