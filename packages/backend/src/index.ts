import express, { Request, Response } from 'express';
import  morgan from "morgan"
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import * as formData from "express-form-data"
import crud from './crud/crud';
import { AppEntities } from 'common';

const app = express();
mongoose.connect("mongodb://localhost:27017/CarRentals").then(()=>{
  console.log("Successfully connected to database")
}).catch(e=>console.error(e))
const port = process.env.PORT || 3000;
const logger = morgan("tiny")
const jsonParser = bodyParser.json()
const formDataParser = formData.parse()


app.use(logger,jsonParser, formDataParser)
app.post('/', async (req: Request, res: Response) => {
    const data = req.body
    await crud.create(AppEntities.Category, {name:"SUV", description:"Best Suv", image:"/img.png"})
    res.json(data)
  });
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express Nkaze! New');
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  