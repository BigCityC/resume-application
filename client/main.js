import { serialize } from './helper-func.js'
import axios from 'axios'

const form = document.querySelector('#form')
const formSubmitBtn = document.querySelector('.submit-btn')
const logo = document.querySelector('.company-logo')
const job_description = {
  title: document.querySelector('.job-title'),
  location: document.querySelector('.location-info'),
  general_description: document.querySelector('#general-description'),
  responsibilities: document.querySelector('#responsibilities'),
  qualities: document.querySelector('#qualities'),
  bonus: document.querySelector('#bonus'),
  benefits: document.querySelector('#benefits'),
  about: document.querySelector('#about')
}

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

window.addEventListener('load', (event) => {
  getCompanyInfo()
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
  logo.src = company.logo
  for (let [key,value] of Object.entries(job_description)){
    if (typeof company.description[key] === 'string'){
      value.innerText = company.description[key];
    }
    else if (typeof company.description[key] === 'object'){
      value.appendChild(createUL(company.description[key]))
    }
  }
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