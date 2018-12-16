/* //hacer un required a yargs
const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar', { //comandos que se escribiran en consola

                base:{

                    demand:true,
                    alias:'b'
                },
                limite:{

                    alias:'l',
                    default:10
                }
            })
            .command('crear', 'Genera un archivo con la tabla de multiplicar', { //comandos que se escribiran en consola

                base:{

                    demand:true,
                    alias:'b'
                },
                limite:{

                    alias:'l',
                    default:10
                }
            })
            .help()
            .argv; */

//hacer un required a yargs

let opts = {
    base:{

        demand:true,
        alias:'b'
    },
    limite:{

        alias:'l',
        default:10
    }
}
const argv = require('yargs')
.command('listar', 'Imprime en consola la tabla de multiplicar', opts)
.command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
.help()
.argv;

module.exports = {

    argv
}