const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hello', (req, res) => {
    //  deleted one line from here 
  res.send('Hello World!')
})
// this is a commented line to check github repo
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
