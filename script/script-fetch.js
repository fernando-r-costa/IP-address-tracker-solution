let ipRetorno = "";


fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_5rogslhAp6kfudgLKS4mR8tnmKdkA&ipAddress=8.8.8.8').then(function(response) {
    return response.json();
  }).then(function(data) {
    ipRetorno = data;
  }).catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

// var theUrl = "https://geo.ipify.org/api/v2/country,city?apiKey=at_5rogslhAp6kfudgLKS4mR8tnmKdkA&ipAddress=8.8.8.8"