let ip = document.querySelector("input");
let erro = document.getElementById("erro");

function mascaraIp() {
    if(ip.value.length === 12) {
        erro.style.display = "none";

    } else {
        erro.style.display = "block";
    }
}