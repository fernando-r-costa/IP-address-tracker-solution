let dadosRetorno = "";

function buscaDados(ipInformado) {
  fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_5rogslhAp6kfudgLKS4mR8tnmKdkA&ipAddress=${ipInformado}`)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      dadosRetorno = data;
    }).catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
};