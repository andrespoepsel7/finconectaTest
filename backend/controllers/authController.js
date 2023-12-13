import {User} from '../models/user.js'
import { hashPassword, comparePassword } from '../helpers/auth.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

// For testing
export const test = (req, res) => {
  res.json('test is working')
}

export const registerUser = async(req, res) => {
  try {
    const {name, email, password, repeatPassword} = req.body
    if(
      !name ||
      !email ||
      !password ||
      !repeatPassword
    ){
      return res.status(400).send({
        message:'All fields are required: name, email, password'
      })
    }
    const exist = await User.findOne({email})
    if(exist){
      return res.status(500).send({
        message:'User already exists'
      })
    }
    if(password === repeatPassword){
      const hashedPassword = await hashPassword(password)
      const newUser = {
        name:name,
        email:email,
        password:hashedPassword,
      }
      const user = await User.create(newUser)
      return res.status(201).send(user)
    }else{
      return res.status(500).send({
        message:"Passwords don't match!"
      })
    }
    
  } catch (error) {
    console.log("Error creating user!", error)    
  }
}

export const loginUser = async(req, res) =>{
  try {
    const {email, password} = req.body
    if(
      !email ||
      !password
    ){
      return res.status(400).send({
        message:'All fields are required: email, password'
      })
    }
    const user = await User.findOne({email})
    if(!user){
      return res.status(400).send({
        message:'The user does not exist!'
      })
    }
    // Check if passwords match
    const match = await comparePassword(password, user.password)
    console.log(match)
    if(match){
      jwt.sign({
        email:user.email,
        id: user._id,
        name:user.name
      }, process.env.JWT_SECRET, {}, async(err, token) =>{
        if(err){
          throw err
        }
        res.cookie('token', token).json(user)
      })
    }
    if(!match){
      return res.status(400).send({
        message:'Incorrect password'
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const getProfile = (req, res) => {
  const {token} = req.cookies
  if(token){
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user)=>{
      if(err){
        throw err
      }  
      res.json(user)
    })
  }else{
    res.json(null)
  }
}

export const logoutUser = (req, res) => {
  res.cookie('token', '', { maxAge: 0 });
  res.send('User logged out successfully');
};
