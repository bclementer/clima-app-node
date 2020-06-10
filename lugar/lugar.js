const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'f1c3ceb17emshc42d54ce4402045p1fa9d3jsn4f70b46b9a00', 'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com' }
    });

    const resp = await instance.get();

    if (resp.data.cod === '400') {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}