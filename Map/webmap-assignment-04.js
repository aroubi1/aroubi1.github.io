let ACRmap = L.map('webmap').setView([38.61057, -97.133041], 4)
L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(ACRmap)

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
