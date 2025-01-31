import express, { NextFunction, Request, Response } from 'express';
import  morgan from "morgan"
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import * as formData from "express-form-data"
import routes from './routes';

const app = express();
mongoose.connect("mongodb://localhost:27017/CarRentals").then(()=>{
  console.log("Successfully connected to database")
}).catch(e=>console.error(e))
const port = process.env.PORT || 3000;
const logger = morgan("tiny")
const jsonParser = bodyParser.json()
const formDataParser = formData.parse({uploadDir:__dirname+"/../images"})
const urlEncoded = bodyParser.urlencoded({ extended: true })
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
  