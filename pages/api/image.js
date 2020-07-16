import roll from 'buffer-loader!../../roll.jpg'

export default (req, res) => {
  res.status(200)
  res.setHeader('Content-Type', 'image/jpeg')
  // Send the image buffer. There are many other ways to send images and other
  // files. For example, you can create a buffer from a base64-encoded string
  // of an image: https://stackoverflow.com/a/28440633/6451879
  res.send(roll)
}
