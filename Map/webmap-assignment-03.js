let ACRmap = L.map('webmap01').setView([44.092287, 7.050693], 13)
L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(ACRmap)

let myicon = L.icon({
  iconUrl: 'pushpin-shadow.png',
  iconSize: [70, 70], // size of the icon
  iconAnchor: [22, 70], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})
let marker = L.marker([44.092287, 7.050693], {icon: myicon}).addTo(ACRmap)

let myPolygonStyle = {
  color: 'brown',
  fillColor: 'blue'
}

let polygonCoords = [
  [44.089532, 7.066607],
  [44.067211, 7.028326],
  [44.160138, 6.980604],
  [44.159523, 7.009443],
  [44.137844, 7.031931],
  [44.128357, 7.026266]
]

let myPolygon = L.polygon(polygonCoords, myPolygonStyle).addTo(ACRmap)
