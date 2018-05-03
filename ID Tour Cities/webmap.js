let ACRmap = L.map('MAP').setView([39.330725, -100.686089], 4)
let Map1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(ACRmap)
let Map2 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')
let Map3 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')

let Basemaps = {
  'State Basemap': Map1,
  'Landscape Map': Map2,
  'Satallite Map': Map3
}


geojsonStyle = function (cities) {
  let Name = cities.properties.Name
  let date = cities.properties.Date
 }


function createPopup (cities, citylayer) {
  let Name = cities.properties.Name
  let date = cities.properties.Date
  citylayer.bindPopup('Where' + ': ' + Name + '<br>Date' + ': ' + date)
}


let myLayer = L.layerGroup().addTo(ACRmap)
function addMyData (feature, layer) {
  myLayer.addLayer(layer)
}

let myLayerStyle = {
  color: '#1FE3E9',
  radius: 5
}

function createCircles (feature, latlng) {
  return L.circleMarker(latlng, myLayerStyle)
}

let myLayerOptions = {
  pointToLayer: createCircles,
  onEachFeature: createPopup
}

L.geoJSON(IDdata, myLayerOptions).addTo(ACRmap)
L.control.layers(Basemaps).addTo(ACRmap)
