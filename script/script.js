let ip = document.querySelector("input");
let button = document.getElementById("button");
let ipAdd = document.getElementById("ip-address");
let ipLoc = document.getElementById("location");
let ipTime = document.getElementById("timezone");
let ipIsp = document.getElementById("isp");

function atualizaDados() {
    ipAdd.innerText = `${dadosRetorno.ip}`;
    ipLoc.innerText = `${dadosRetorno.location.city}, ${dadosRetorno.location.region} ${dadosRetorno.location.postalCode}`;
    ipTime.innerText = `UTC ${dadosRetorno.location.timezone}`;
    ipIsp.innerText = `${dadosRetorno.isp}`;
    lat = dadosRetorno.location.lat;
    long = dadosRetorno.location.lng;
}

function procuraIP() {
    buscaDados(ip.value);
    setTimeout(atualizaDados, 1000);
    setTimeout(atualizaMapa, 1000);
}

button.addEventListener('click', function() {procuraIP()});


// se necessário validar
// // let erro = document.getElementById("erro");

// se necessário usar máscara
// let ipInformado = "";
// let ipAjustado = "";
// function mascaraIp() {
//     ipInformado = ip.value.replace(/\./g, "");
//     if (ipInformado.length === 12) {
//         erro.style.display = "none";
//         const parte1 = ipInformado.slice(0, 3);
//         const parte2 = ipInformado.slice(3, 6);
//         const parte3 = ipInformado.slice(6, 9);
//         const parte4 = ipInformado.slice(9, 12);
//         ipAjustado = `${parte1}.${parte2}.${parte3}.${parte4}`
//         console.log(ipAjustado);
//     } else {
//         erro.style.display = "block";
//     } 
// };