import express from 'express';
import { Company } from '../models/company.js'

//using route: '/companies'
const router = express.Router()

router.get('/',  async (req, res) => {
  const data = await Company.find();
  res.render('index', {
    companies: data,
    title: 'Companies Hiring'
  })
})

export { router as indexRouter }