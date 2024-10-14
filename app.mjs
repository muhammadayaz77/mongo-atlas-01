import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/database.mjs';
import itemRouter from './routers/itemRouter.mjs'
dotenv.config();

let app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/items',itemRouter);

app.listen(3000,() => {
  console.log('http://localhost:3000')
})