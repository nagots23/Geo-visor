var map = L.map('map').setView([-12.113408,-77.012904],14);

//Enlazar el Open Street Map
//osm = L.tileLayer("https://www.openstreetmap.org/#map=7/-35.380/-60.172.png").addTo(map);

//Enlazar el Open Street Map
//osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18
}).addTo(map);


/*Enlazar nuestro servicio wms
L.tileLayer.wms("http://localhost:8080/geoserver/Catastro_Surquillo/wms?",{
    Layers: 'TG_SECTORES',
    format: 'image/png’,
    transparent: True
}).addTo(map);
*/

L.marker([41.66, -4.71],{draggable: true}).addTo(map);