import express from 'express'
import { Company } from '../models/company.js'

//using route: '/companies/apply'
const router = express.Router()

router.get('/:id', async (req, res) => {
  const company = await Company.findById(req.params.id)

  res.render('application', {
    company:company,
    description: company.description,
    title: `Apply for ${company.description.title}`
  })
})

export { router as applicationRouter }