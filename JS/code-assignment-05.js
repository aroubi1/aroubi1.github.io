let projectData = []

projectData[0] = {
  id: 1,
  url: "https://www.arcgis.com/apps/MapTour/index.html?appid=a06edc3270f44f62b04921dc931895e9",
  title: "Tour of Mobile Alabama",
  desc:  "An ArcGIS Online Web App showing a tour of the Mobile, Alabama area including the RSA Tower and Battleship Memorial Park.",
  thumb: true,
  keywords: ['Mobile', 'Alabama', 'arcgis map', 'tour']
}
projectData[1] = {
  id: 2,
  url: "https://arcg.is/1vueef",
  title: "Earthquake Data",
  desc:  "An ArcGIS Online Web App showing earthquake data of earthquakes with a magnitute of 5 or greater.",
  thumb: true,
  keywords: ['earthquakes', 'magnitude', 'arcgis map', 'data']
}

projectData[2] = {
  id: 3,
  url: "https://acrube1218.maps.arcgis.com/apps/GeoForm/index.html?appid=9080e915477740569a4d6d4184340ac9",
  title: "Animal Sightings",
  desc:  "An ArcGIS Online Web App showing animal sightings around the Baton Rouge area.",
  thumb: true,
  keywords: ['animal', 'sightings', 'arcgis map',]
}

projectData[3] = {
  id: 4,
  url: "https://www.arcgis.com/apps/webappviewer/index.html?id=072152e22ab244449bc305bd2874a82b&extent=-10197927.7974%2C3541676.3631%2C-10082813.6328%2C3598927.6973%2C102100",
  title: "Local Places",
  desc:  "An ArcGIS Online Web App displaying groceries, churuches, and parks around the Baton Rouge area.",
  thumb: true,
  keywords: ['grocery', 'churches', 'parks', 'data']
}

projectData[3] = {
  id: 4,
  url: "https://acrube1218.maps.arcgis.com/apps/webappviewer/index.html?id=d640a4d885cf4e6db8427a5f6ed0a916",
  title: "US Population Growth",
  desc:  "An ArcGIS Online Web App showing displaying population growth of the United States starting from 1790 through 2000.",
  thumb: true,
  keywords: ['US', 'population', 'growth', 'data']
}

for (let i=0; i < projectData.length; i++) {
  if (projectData[i].thumb === true) {
    console.log('photos/book-assignment0' + projectData[i].id + '.png')
  } else {
    console.log('photos/no-preview.png')
  }
}
