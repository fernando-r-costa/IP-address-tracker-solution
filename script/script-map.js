var map = L.map('map').setView([51.505, -0.09], 13);
var iconLocation = L.icon({
    iconUrl: "./images/icon-location.svg",
    iconSize:     [35, 50],
    iconAnchor:   [22, 94],
});
var marker = L.marker([51.5, -0.09], {icon: iconLocation}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);