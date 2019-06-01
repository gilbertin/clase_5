const jugador = {
	nombre: "John Doe",
	partidas: [true, false, true, true]
}
suma = 0 
for (let i = 0; i < jugador.partidas.length; i++){
    if (jugador.partidas[i]){
        suma += 1
    }
    
}
console.log('el jugador  '  + jugador.nombre + ' gano  ' + suma)


