(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        console.log('ready');

        var mymap = L.map('mapa').setView([4.630099, -74.090552], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);

        L.marker([4.630099, -74.090552]).addTo(mymap)
            .bindPopup('GDLWebCamp Conference <br> Entradas disponibles')
            .openPopup();

    }); //DOM CONTENT LOADED
})();