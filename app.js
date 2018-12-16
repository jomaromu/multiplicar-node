//importar argv de yarg.js
const argv  = require('./config/yargs').argv

//importar los archivos de multiplicar.js
const { crearArchivo, listarTabla } = require('../multiplicar/multiplicar'); //destructuro el modulo de multiplicar.js

let comando = argv._[0];

switch(comando){
    
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${archivo} a sido creado`))
            .catch(error => console.log(error));
    break;
    default:
    console.log('Comando no reconocido');
}

/* console.log(comando);  */   

