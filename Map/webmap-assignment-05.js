let ACRmap = L.map('webmap').setView([38.61057, -97.133041], 4)
let Map1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(ACRmap)
let Map2 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')
let Map3 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')

let Basemaps = {
  'State Basemap': Map1,
  'Landscape Map': Map2,
  'Satallite Map': Map3
}

geojsonStyle = function (state) {
  let age = state.properties.MED_AGE
  let stateColor = 'blue'
  if ( age < 40 ) { stateColor = 'brown'}
  let myStyle = {
   color: stateColor,
   weight: 1,
   fillOpacity: 0.2,
   opacity: 3.0,
 }
 return myStyle
}

function createPopup (state, statelayer) {
  let name = state.properties.STATE_NAME
  let age = state.properties.MED_AGE
  let AsianPopulation = state.properties.ASIAN
  statelayer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38' + '<br>Asian Population: ' + AsianPopulation )
}

geojsonOptions = {
  style: geojsonStyle,
  onEachFeature: createPopup
}

L.geoJSON(statedata, geojsonOptions).addTo(ACRmap)
L.control.layers(Basemaps).addTo(ACRmap)
