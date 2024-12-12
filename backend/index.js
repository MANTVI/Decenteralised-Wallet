import express from 'express'
import dotenv, { config } from 'dotenv';
import Moralis from "moralis";
import app from "./app.js"
dotenv.config()
const port=process.env.PORT
const api = process.env.MORALIS_API_KEY;



Moralis.start({
  apiKey: api,
})
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error starting Moralis:", err);
  });