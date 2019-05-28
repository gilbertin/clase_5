let peso = 80;
const peso_ideal = 65;
let contador_semanas = 0;

while(peso > peso_ideal){
    let peso_perdido = 5 ;
        peso = peso - peso_perdido;
        contador_semanas++;
}
console.log('numero semanas ' + contador_semanas); 