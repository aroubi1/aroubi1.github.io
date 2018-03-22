let ACRmap = L.map('webmap01').setView([44.092287, 7.050693], 13)
L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(ACRmap)
let marker = L.marker([44.092287, 7.050693]).addTo(ACRmap)
let polygon = L.polygon([
  [44.089532, 7.066607],
  [44.067211, 7.028326],
  [44.160138, 6.980604],
  [44.159523, 7.009443],
  [44.137844, 7.031931],
  [44.128357, 7.026266]
]).addTo(ACRmap);

polygon.bindPopup('Roubion City Limits')
marker.bindPopup('Roubion, France')

ACRmap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

var latlngs = [
    [44.100328, 7.023049],
    [44.093301, 7.025924],
    [44.088955, 7.038370],
    [44.095766, 7.055751]
];
var polyline = L.polyline(latlngs, {color: 'green'}).addTo(ACRmap)
