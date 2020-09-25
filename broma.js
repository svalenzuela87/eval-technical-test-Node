//Importo metodos de 
const metodosBroma = require('./ServicioBromas');

//Usando argumentos
var myArgs = process.argv.slice(2);

if (myArgs == ''){
    console.error("No ingresaste ningun valor");
 } else {
       metodosBroma.buscarBroma(myArgs);
}