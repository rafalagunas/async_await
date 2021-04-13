const DataBaseQuery = require("./Services/index").DataBaseQuery;
// ANCHOR Manipulación de información o ejecución de acciones una ves resuelta la función asíncrona. Un todo.
DataBaseQuery().then((response) => {
  console.log(response);
});
