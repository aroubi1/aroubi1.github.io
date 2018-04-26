let ACRmap = L.map('MAP').setView([39.330725, -100.686089], 4)

L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(ACRmap)

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
