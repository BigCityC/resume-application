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
  const data = await Company.findById('624472b6e403daeae3c2527b');
  console.log(data)
  res.send('test')
})
const assemble2 = new Company({
  name: 'Assemble2',
  location: 'onsite',
  candidates: [],
  description:[{
    general_description: 'general way to describe your company',
    responsibilities: ['three', 'four'],
    qualities: ['five','six'],
    bonus: ['seven','eight'],
    benefits: ['nine'],
    about: 'let me tell you something about us.'
  }]
})

assemble2.save((err)=> {
  if (err) console.log('err: ')
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