import { serialize } from './helper-func.js'
import axios from 'axios'

const company_logo = document.querySelector('.company-logo')
const job_title = document.querySelector('.job-title')
const job_location = document.querySelector('.location-info')
const general_description = document.querySelector('#general-description')
const responsibilities = document.querySelector('#responsibilities')
const qualities = document.querySelector('#qualities')
const bonus = document.querySelector('#bonus')
const benefits = document.querySelector('#benefits')
const about = document.querySelector('#about')
const form = document.querySelector('#form')
const formSubmitBtn = document.querySelector('.submit-btn')

//setup axios
const api = axios.create({
  baseURL: 'http://localhost:5000/'
})

//on form Submission
formSubmitBtn.addEventListener('click', function (event) {
  formValidation()
  event.preventDefault()
  const formData = new FormData(form)
  console.log(serialize(formData))
})


//form validation
function formValidation () {
  //check required fields are filled in
  const inputs = document.getElementsByTagName('input')
  const requiredInputs = [...inputs].filter(input => input.hasAttribute('required'))
  for (let input of requiredInputs) {
    if (input.value === '' || input.value == null) {
      input.parentNode.classList.add('input-error')
    }
  }
}

window.addEventListener('load', (event) => {
  getCompanyInfo()
})

function getCompanyInfo () {
  return api.get('/')
    .then(res => {
      fillCompanyInfo(res.data)
    })
    .catch(error => {
      console.log(error)
    })
}

function fillCompanyInfo (company) {
  console.log(company)
  company_logo.src = company.logo
  job_title.innerHTML = company.description[0].title
  job_location.innerHTML = company.description[0].location
  general_description.innerHTML = company.description[0].general_description
  responsibilities.appendChild(createUL(company.description[0].responsibilities))
  qualities.appendChild(createUL(company.description[0].qualities))
  bonus.appendChild(createUL(company.description[0].bonus))
  benefits.appendChild(createUL(company.description[0].benefits))
  about.innerHTML = company.description[0].about

}

function createUL (part) {
  const ul = document.createElement('ul')
  ul.classList.add('list')
  for (let item of part) {
    const li = document.createElement('li')
    li.innerHTML = item
    ul.appendChild(li)
  }
  return ul
}



//data
const candidates = [
  {
    firstName: 'courtney',
    lastName: 'walsh',
    id: 1,
    applied: [1, 4, 7],
    email: 'courtneywalsh05@gmail.com',
    linkedin: 'https://https://www.linkedin.com/in/courtney-a-walsh/',
    phone: '513-555-4664',
    description: 'I am a javascript developer.',
    resume: {
      file: 'https://here'
    } //mongodb would convert file ? //try to build from scratch?? what is problem it solves.
  },
  {
    firstName: 'anne',
    lastName: 'smith',
    id: 3,
    applied: [1, 4, 7],
    email: 'asmith43@gmail.com',
    linkedin: 'https://https://www.linkedin.com/in/anne-smith/',
    phone: '513-555-3364',
    description: 'I am a nodeJS developer.',
    resume: {
      file: 'https://here'
    }
  },
  {
    firstName: 'marc',
    lastName: 'mitalski',
    id: 5,
    applied: [1, 4, 7],
    email: 'mmitalski@yahoo.com',
    linkedin: 'https://https://www.linkedin.com/in/marc-mitalski/',
    phone: '513-555-4124',
    description: 'I am a C# developer.',
    resume: {
      file: 'https://here'
    }
  }
]