function createTitle (title) {
  console.log('Title: ' + title)
}
function createThumbnail (thumb, id) {
  if (thumb === true) {
    console.log('photos/book-assignment0' + id + '.png')
  } else {
    console.log('photos/no-preview.png')
  }
}
