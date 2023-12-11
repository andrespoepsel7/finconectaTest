import express, { request, response } from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import { Book } from "./bookModel.js"

const app = express()

app.use(express.json())

// 
app.get('/', (req, res)=>{
  console.log(req)
  return res.status(234).send("Hello World!")
})

app.post('/books', async (request, response) => {
  try{
    // Logic to create a new book based on it's fields
    if(
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ){
      return response.status(400).send({
        message:'All fields are required: title, author,  publish year'
      })
    }
    const newBook = {
      title:request.body.title, 
      author:request.body.author, 
      publishYear:request.body.publishYear, 
    }
    const book = await Book.create(newBook)
    return response.status(201).send(book)

  }catch(error){
    console.log(error)
    response.status(500).send({message:error.message})
  }
})

// Get all books
app.get('/books', async (request, response) => {
  try {
    const books = await Book.find({})
    return response.status(200).json({
      count:books.length,
      data:books,
    })

  } catch (error) {
    console.log(error.message)
    response.status(500).send({message:error.message})
  }
})

// Get a book by id
app.get('/books/:id', async (request, response) => {
  try {
    const {id} = request.params
    const book = await Book.findById(id)
    return response.status(200).json(book)

  } catch (error) {
    console.log(error.message)
    response.status(500).send({message:error.message})
  }
})

// Update a book
app.put('/books/:id', async (request, response)=>{
  try {
    if(
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ){
      return response.status(400).send({
        message:'All fields are required: title, author,  publish year'
      })
    }
    const {id} = request.params
    const result = await Book.findByIdAndUpdate(id, request.body)
    if(!result){
      return response.status(404).json({message:'Book not found'})
    }
    return response.status(200).send({message:'Book updated succesfully'})
  } catch (error) {
    console.log(error)
    response.statusMessage(500).send({message:error.message})
  }
})

// Delete book
app.delete('/books/:id', async (request, response) => {
  try {
    const {id} = request.params
    const result = await Book.findByIdAndDelete(id)
    if(!result){
      return response.status(404).json({message:'Book not found'})
    }
    return response.status(200).send({message:"Book deleted succesfully"})
  } catch (error) {
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