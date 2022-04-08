import express from 'express'
import { Company, Candidate } from '../models/company.js'

//using route: '/companies/apply'
const router = express.Router()

router.get('/:id', async (req, res) => {
  const company = await Company.findById(req.params.id)

  res.render('application', {
    company: company,
    description: company.description,
    title: `Apply for ${company.description.title}`
  })
})

router.post('/:id', async (req, res) => {
  const companyId = req.body.companyId

  try {
    //check if candidate is already in database
    const userExists = await Candidate.findOne({ email: req.body.email })

    if (userExists) {
      //update candidate's array with new company id
      Candidate.findByIdAndUpdate(
        userExists._id,
        { $addToSet: { 'applied': companyId } },
        (err)=>{
          if (err) {
            throw new Error(err)
          }
        }
      )
    }
    else {
      //create candidate and poulate array
      const newCandidate = new Candidate(req.body)
      newCandidate.applied = [companyId]
      await newCandidate.save()
    }
    res.redirect(`/companies/apply/${companyId}/success`)
  }
  catch (err) {
    res.send(err)
  }
})


export { router as applicationRouter }