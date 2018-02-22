let project1Array = [
  1,
  "https://www.arcgis.com/apps/MapTour/index.html?appid=a06edc3270f44f62b04921dc931895e9",
  "Tour of Mobile Alabama",
  "An ArcGIS Online Web App showing a tour of the Mobile, Alabama area including the RSA Tower and Battleship Memorial Park.",
  true,
  ['Mobile', 'Alabama', 'arcgis map', 'tour']
]

let project1 = {
  id: 1,
  url: "https://www.arcgis.com/apps/MapTour/index.html?appid=a06edc3270f44f62b04921dc931895e9",
  title: "Tour of Mobile Alabama",
  desc:  "An ArcGIS Online Web App showing a tour of the Mobile, Alabama area including the RSA Tower and Battleship Memorial Park.",
  thumb: true,
  keywords: ['Mobile', 'Alabama', 'arcgis map', 'tour']
}

// logs the title from the project data array, because the title is in position 2
console.log(project1Array);


// two ways to log the title from the project data object
console.log(project1);
