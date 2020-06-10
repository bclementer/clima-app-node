const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion

/*
lugar.getLugarLatLng(argv.direccion)
    .then(console.log);
*/
/*
clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log);
*/
const getInfo = async(direccion) => {

    try {
        //Vamos a recuperar la latitud y la longitud
        const coordenadas = await lugar.getLugarLatLng(direccion);

        //Obtenemos la temperatura de ese lugar.
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng)

        return `El clima de ${coordenadas.direccion} es de ${temperatura}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${coordenadas.direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)