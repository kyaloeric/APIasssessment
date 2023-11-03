import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import noteRouter from './routes/noteRoute'; 
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', noteRouter);

app.use( '*' , (req:Request, res :Response) => {
  res.send('incorrect link!!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
