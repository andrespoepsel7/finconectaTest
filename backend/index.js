import express, { request } from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import { Book } from "./bookModel.js"

const app = express()

// 
app.get('/', (req, res)=>{
  console.log(req)
  return res.status(234).send("Hello World!")
})

app.post('/books', async (request, response) => {
  try{
    // Logic to create a new book based on it's fields

  }catch(error){
    console.log(error)
    response.status(500).send({message:error.message})
  }
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