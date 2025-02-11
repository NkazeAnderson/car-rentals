import express, { NextFunction, Request, Response } from 'express';
import  morgan from "morgan"
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import * as formData from "express-form-data"
import cors from "cors"
import routes from './routes';
import cookie_parser from "cookie-parser"
import models from './models/models';
import { userT } from 'common/src/zodSchemas';
import { frontendUrl } from 'common';
import { __dev, adminCode, mongoDbUrl } from './constants';

const app = express();
if (!mongoDbUrl) {
  throw ("mongoDb connection string required")
}
mongoose.connect(mongoDbUrl).then(()=>{
  console.log("Successfully connected to database")
}).catch(e=>console.error(e))
const port = process.env.PORT || 3000;

const logger = morgan("tiny")
const jsonParser = bodyParser.json()
const formDataParser = formData.parse({uploadDir:__dirname+"/../images"})
const urlEncoded = bodyParser.urlencoded({ extended: true })

app.use(cors({origin:frontendUrl, credentials:true}))
app.use(cookie_parser(adminCode))
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
      if (req.body.password === adminCode) {
        const data = await models.User.findOne({email})
        if (data?._id && data.isAdmin) {   
          res.cookie("userId", data._id, __dev ? {
            signed:true
          } :{
            signed:true, sameSite:"none", secure:true, httpOnly:true
          }
        )
          res.json({id:data._id})
        }
        else if (data?._id && !data.isAdmin) {   
          res.cookie("userId", data._id,  __dev ? {
            signed:true
          } :{
            signed:true, sameSite:"none", secure:true, httpOnly:true
          })
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
  app.post("/createAdmin",async (req, res, next)=>{
    try {    
      const email = req.body.email
      const password = req.body.code
      const name = req.body.name
      if (!email || !password || !name){
        throw new Error("Email and Password Required")
      }
      if (password === adminCode) {
        const [firstName, ...rest] = String(name).split(" ")
        const user:userT = {
          _id:crypto.randomUUID().split("-").join("").substring(0,24),
          email,
          firstName,
          lastName: rest.join(" "),
          phone:"+17777777777",
          street:"123 west new york",
          state:"New York",
          city:"New York City",
          country:"United States",
          zipCode:"100023",
          isAdmin:true
        }
        const data = await models.User.create(user)
        res.json({id:data._id})
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
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
  