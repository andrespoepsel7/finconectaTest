import express from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"

const app = express()

// 
app.get('/', (req, res)=>{
  console.log(req)
  return res.status(234).send("Hello World!")
})


mongoose
  .connect(mongoDBURL)
  .then(()=>{
    console.log("App connected succesfully")
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`)
    })
  })
  .catch((error)=>{
    console.log(error)
  })