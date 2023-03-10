let ip = document.querySelector("input");
let erro = document.getElementById("erro");
let ipAtual = "";
let ipAjustado = "";

function mascaraIp() {
    ipAtual = ip.value.replace(/\./g, "");
    if (ipAtual.length === 12) {
        erro.style.display = "none";
        const parte1 = ipAtual.slice(0, 3);
        const parte2 = ipAtual.slice(3, 6);
        const parte3 = ipAtual.slice(6, 9);
        const parte4 = ipAtual.slice(9, 12);
        ipAjustado = `${parte1}.${parte2}.${parte3}.${parte4}`
        console.log(ipAjustado);
    } else {
        erro.style.display = "block";
    } 
}