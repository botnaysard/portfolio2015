const express = require('express')
const app = express()

app.listen(process.env.PORT || 8080, () => {
  console.log('listening on 8080')
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
