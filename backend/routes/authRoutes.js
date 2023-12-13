import express from "express"
import cors from 'cors'
import { frontEndUrl } from "../config.js"
import {test, registerUser, loginUser, getProfile, logoutUser} from "../controllers/authController.js"

const authRouter = express.Router()

authRouter.use(
  cors({
    credentials:true,
    origin:frontEndUrl,
  })
)

authRouter.get('/', test)
authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.get('/profile', getProfile)
authRouter.get('/logout', logoutUser)

export default authRouter
