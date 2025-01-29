import express, { Request, Response } from 'express';
import  morgan from "morgan"

const app = express();
const port = process.env.PORT || 3000;
const logger = morgan("tiny")
app.use(logger)
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express Nkaze! New');
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  