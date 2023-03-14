let lat = 51.505;
let long = -0.09;

let map = L.map('map').setView([51.505, -0.09], 14);
let iconLocation = L.icon({
    iconUrl: "./images/icon-location.svg",
    iconSize:     [35, 50],
    iconAnchor:   [22, 94],
});
let marker = L.marker([lat, long], {icon: iconLocation}).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function atualizaMapa () {
    map.panTo([lat, long]);
    marker.setLatLng([lat, long]);
};