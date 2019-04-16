const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let data of listado) {
            console.log('======POR HACER ======'.green);
            console.log(data.descripcion);
            console.log('Estado: ', data.completado);
            console.log('============'.green);

        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        break;
    default:
        console.log('Comando no es reconocido')
}