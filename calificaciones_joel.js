// Joel tiene que informar a sus alumnos quienes tienen que repetir curso, el tiene una lista de alumnos, 
// cada alumno tiene un nombre y una lista de calificaciones que se tienen que promediar para saber si el 
// alumno está aprobado, el promedio mínimo para aprobar es 6. Haz un algoritmo que escriba el nombre de los 
// alumnos que no aprobaron.
var alumno_repro = [] 
var alumnos = [4];
alumnos[0] = {
    "name": "Gil",
    "calificaciones": [8, 9, 6]
};
alumnos[1] = {
    "name": "eduardo",
    "calificaciones": [8, 8, 8]
};
alumnos[2] = {
    "name": "javier",
    "calificaciones": [5, 7, 3]
};
alumnos[3] = {
    "name": "david",
    "calificaciones": [8, 4, 5]
};

for (let i = 0 ; i < alumnos.length; i++ ) {
    const calificaciones = alumnos[i].calificaciones;
    let suma = 0
    
    for (let n = 0; n < calificaciones.length; n++ ){
        suma += calificaciones[n]
    }
// console.log(suma)
    const promedio = suma / calificaciones.length
    if (promedio <= 6) {
        alumno_repro.push(alumnos[i])
    }
}for (let y = 0; y < alumno_repro.length; y++){
    console.log(alumno_repro[y].name)
}