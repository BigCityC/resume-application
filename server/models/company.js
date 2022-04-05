import mongoose from 'mongoose'


const jobSchema = new mongoose.Schema({
  title: String,
  location: String,
  general_description:String,
  responsibilities: Array,
  qualities: Array,
  bonus: Array,
  benefits: Array,
  about: String
})

const companySchema = new mongoose.Schema({
  name: String,
  logo: String,
  candidates: [{ type: mongoose.Schema.Types.ObjectId }],
  description: jobSchema
})

const candidateSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    required: true
  },
  phone: String,
  description: String,
  resume: String,
  applied: [{ type: mongoose.Schema.Types.ObjectId }]
})

const Candidate = mongoose.model('Candidate', candidateSchema)
const Company = mongoose.model('Company', companySchema)

export { Candidate, Company }