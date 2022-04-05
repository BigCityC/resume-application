import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { Company } from './models/company.js'
//setup
const app = express()
const PORT = 5000;

//middleware
app.use(express.json())
app.use(cors());
dotenv.config();

//routes
app.get('/',  async (req, res) => {
  const data = await Company.findById('624c62c0b12a70eacbf0bbe4');
  res.send(data)
})

//listen to server
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`)
})

//connect to DN
mongoose.connect(
  process.env.DB_CONNECTION,
  () => console.log('connected to database')
)