// Joel tiene que informar a sus alumnos las materias que reprobaron, el tiene una lista de alumnos, 
// cada alumno tiene un nombre y una lista de materias, cada materia tiene su nombre y su calificación, 
// el promedio mínimo para aprobar es 6. Haz un algoritmo que escriba el nombre del alumno y la materia que reprobó.
const alumnos = [
    {
        nombre: '',
        materias: [
            {
                nombre: '',
                calificacion: 2
            }
        ]
    },
    {
        nombre: '',
        materias: [
            {
                nombre: '',
                calificacion: 2
            }
        ]
    }
    
]
var alumnos = [{
    "name": "juan",
    "materias": 
        {
        "name": "matematicas",
        "calificacion": 9
    }, {
        "name": "biologia",
        "calificacion": 9
    }, {
        "name": "quimicas",
        "calificacion": 9
    ],
    
    "name": "pepe",
    "materias":
        {
        "name": "matematicas",
        "calificacion": 8
    }, {
        "name": "biologia",
        "calificacion": 6
    }, {
        "name": "quimicas",
        "calificacion": 7
    }
}
{
    "name": "maikol",
    "materias": [
        {
        "name": "matematicas",
        "calificacion": 8
    }, {
        "name": "biologia",
        "calificacion": 4
    }, {
        "name": "quimicas",
        "calificacion": 9
    }
}
{
    "name": "yisus",
    "materias": 
        {
        "name": "matematicas",
        "calificacion": 7
    }, {
        "name": "biologia",
        "calificacion": 2
    }, {
        "name": "quimicas",
        "calificacion": 9
    }

    ]
};
//lees arreglo alumnos para obtener materias de cada uno 
for (let i = 0 ; i < alumnos.length; i++ ) {
    const materias = alumnos[i].materias;
    let suma = 0
//declaras un contador para promedias las materias por alumno 
    for (let n = 0; n < materias.length; n++ ){
        suma += materias[n].calificacion
    }
    //calcula el promedio de las materias 
    const promedio = suma / materias.length
    //valida que el promedio sea reprobado 
    if (promedio <= 6) {
        alumno_repro.push(alumnos[i])
        //se manda al alumno al arreglo que declaramos donde se guradaran los alumnos reprobados 
    }
}
//se lee la informacion de cada alumno reprobado 
for (let y = 0; y < alumno_repro.length; y++){
    //e imprime el alumno reprobado
    console.log(alumno_repro[y].name);
    //se leen las materias del alumno reprobado
    const materias = alumno_repro[y].materias;
    for (let r = 0; r < materias.length; r++ ){
        //se valida que la calificacion sea reprobatoria 
        if (materias[r].calificacion <= 6){
            //imprime el nombnre de la materia reprobada del promedio reprobado
            console.log(materias[r].name)
        }
    }

}