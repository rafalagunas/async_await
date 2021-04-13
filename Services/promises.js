// ANCHOR Peticiones a API, consultas a Base de datos, etc.
let miPrimeraPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("¡Éxito!");
  }, 250);
});

exports.miPrimeraPromise = miPrimeraPromise;
