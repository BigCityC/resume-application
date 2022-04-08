import express from 'express'
import { Company, Candidate } from '../models/company.js'

//using route: '/companies/apply/id/success'
const router = express.Router()

router.get('/:id/success', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
    console.log(company)
    res.render('success', {
      companyName: company.name,
      jobTitle: company.description.title,
      title: `Applied to ${company.description.title}`
    })
  }
  catch (err){
    console.log(err)
  }

})

export { router as successRouter }