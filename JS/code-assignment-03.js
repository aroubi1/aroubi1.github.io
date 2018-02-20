// assign values to a set of variables representing a project's metadata
let projectId = 1
let projectUrl = 'https://www.arcgis.com/apps/MapTour/index.html?appid=a06edc3270f44f62b04921dc931895e9'
let projectTitle = 'Tour of Mobile Alabama'
let projectDesc = 'An ArcGIS Online Web App showing a tour of the Mobile, Alabama area including the RSA Tower and Battleship Memorial Park.'
let projectThumb = true
let projectMapExtent = [48.51, -28.37, 2.63, -132.34]

// display messages in the browser's developer console, combining the values with text
console.log('ID: ' + projectId)
console.log('Url: ' + projectUrl)
console.log('Title: ' + projectTitle)
console.log('Description: ' + projectDesc)
console.log('Has thumbnail? ' + projectThumb)
console.log('Map extent: ' + projectMapExtent)
