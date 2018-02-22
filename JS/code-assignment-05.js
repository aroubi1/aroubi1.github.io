let projectArray = [ {
  id: 1,
  url: "https://www.arcgis.com/apps/MapTour/index.html?appid=a06edc3270f44f62b04921dc931895e9",
  title: "Tour of Mobile Alabama",
  desc:  "An ArcGIS Online Web App showing a tour of the Mobile, Alabama area including the RSA Tower and Battleship Memorial Park.",
  thumb: true,
  keywords: ['Mobile', 'Alabama', 'arcgis map', 'tour']
}, {
  id: 2,
  url: "https://arcg.is/1vueef",
  title: "Earthquake Data",
  desc:  "An ArcGIS Online Web App showing earthquake data of earthquakes with a magnitute of 5 or greater.",
  thumb: true,
  keywords: ['earthquakes', 'magnitude', 'arcgis map', 'data']
} ]

for (let i=0; i < projects.length; i++) {
  let x = i + 1
  console.log('book-assignment0 ' + x + '.png')
}
console.log(projectArray);
