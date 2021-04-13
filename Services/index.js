const miPrimeraPromise = require("./promises").miPrimeraPromise;

// ANCHOR Definición de funcion/es que nos permiten utilizar uno o más promesas para el flujo de una aplicación. Por ejemplo,
// Conectar una promesa para consulta a una base de datos NOSQL, otra SQL y un servicio externo.
async function DataBaseQuery() {
  let myData = await miPrimeraPromise;
  let myData2 = await miPrimeraPromise;

  return { data: myData, data2: myData2 };
}

exports.DataBaseQuery = DataBaseQuery;
