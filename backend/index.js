import express from 'express'
import dotenv, { config } from 'dotenv';

const app = express()
dotenv.config()
const port=process.env.PORT
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/vimal', (req, res) => {
  res.send('Hello VIMAL!')
})
app.get('/vi', (req, res) => {
  res.send('Hello vimalllllll Singh ')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})