const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// this is a commented line to check github repo
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
