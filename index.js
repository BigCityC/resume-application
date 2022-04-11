import express from 'express';
import expressLayouts from 'express-ejs-layouts'
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();
import mongoose from 'mongoose';
import dotenv from 'dotenv'
//import routes
import { indexRouter } from './routes/homepage.js'
import { applicationRouter } from './routes/application.js'
import { successRouter } from './routes/success.js'

//setup
const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
app.set('layout', 'layouts/layout')
app.set('public', './public')
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(expressLayouts)
app.use(express.static(__dirname + '/public'))
app.use('/', indexRouter)
app.use('/companies/apply', applicationRouter)
app.use('/companies/apply', successRouter)

//listen to server
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`)
})
console.log(process.env.DB_CONNECTION)
//connect to DN
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });