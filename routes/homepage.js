import express from 'express';
import { Company } from '../models/company.js'

//using route: '/companies'
const router = express.Router()

router.get('/companies',  async (req, res) => {
  const data = await Company.find();
  res.render('homepage', {
    companies: data,
    title: 'Companies Hiring'
  })
})

export { router as indexRouter }