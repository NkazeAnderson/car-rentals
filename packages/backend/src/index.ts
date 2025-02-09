import express, { NextFunction, Request, Response } from 'express';
import  morgan from "morgan"
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import * as formData from "express-form-data"
import cors from "cors"
import routes from './routes';
import cookie_parser from "cookie-parser"
import models from './models/models';

const app = express();
mongoose.connect("mongodb://localhost:27017/CarRentals").then(()=>{
  console.log("Successfully connected to database")
}).catch(e=>console.error(e))
const port = process.env.PORT || 3000;

const logger = morgan("tiny")
const jsonParser = bodyParser.json()
const formDataParser = formData.parse({uploadDir:__dirname+"/../images"})
const urlEncoded = bodyParser.urlencoded({ extended: true })

app.use(cors({origin:"http://localhost:5173", credentials:true}))
app.use(cookie_parser('1234'))
app.use(logger,jsonParser, urlEncoded)
app.use(formDataParser);
app.use("/images",express.static(__dirname + '/../images'))
app.use((req, res, next)=>{
  if ("files" in req ) {
    const files = req.files as Record<string, {path:string}>
    for(let key in files) {
      let split = files[key].path.split("/")
      if (split.length<=1) {
        split = files[key].path.split("\\")
      }
      req.body[key] = split[split.length - 1]
    }
  }
  next()
})

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome');
  });
  app.post("/login",async (req, res, next)=>{
    try {    
      const email = req.body.email
      const password = req.body.password
      if (!email || !password){
        throw new Error("Email and Password Required")
      }
      if (req.body.password === "1234") {
        const data = await models.User.findOne({email})
        if (data?._id && data.isAdmin) {   
          res.cookie("userId", data._id, {signed:true, 
            // sameSite:"none", secure:true, httpOnly:true
          })
          res.json({id:data._id})
        }
        else if (data?._id && !data.isAdmin) {   
          res.cookie("userId", data._id, {signed:false,  sameSite:"none", secure:true, httpOnly:true})
          res.json({id:data._id})
        }
        else {
          throw new Error("can't find user");
        }
      }
      else {
        throw new Error("Invalid cred");
      }
    } catch (error) {
      next(error)
    }
  })
app.use(routes)
app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
 if (err) {
  if (err instanceof Error) {
    console.log(err);
    
    try {
      const errorMessage = JSON.parse(err.message)
      if ("code" in errorMessage) {
        res.status(Number(errorMessage.code))
      }
      else{
        res.status(500)
      }
      res.json(errorMessage)
    } catch (error) {
      
      res.status(500).send('Something broke!')
    }
   
  }
  else{
    res.status(500).send('Something broke!')
  }
 }
})

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  