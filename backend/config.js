import dotenv from 'dotenv'
dotenv.config()

export const PORT = 5555
export const mongoDBURL = `mongodb+srv://root:${process.env.MONGODB_PASSWORD}@pepi01.x4m0lwi.mongodb.net/books-collection?retryWrites=true&w=majority`