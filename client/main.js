import { serialize } from './helper-func.js';

const company_logo = document.querySelector('.company-logo')
const job_title = document.querySelector('.job-title')
const job_location = document.querySelector('.location-info')
const general_description= document.querySelector('#general-description')
const responsibilities = document.querySelector('#responsibilities')
const qualities = document.querySelector('#qualities');
const bonus = document.querySelector('#bonus');
const benefits = document.querySelector('#benefits');
const about = document.querySelector('#about');
const form = document.querySelector('#form');
const formSubmitBtn = document.querySelector('.submit-btn');

//on form Submission
formSubmitBtn.addEventListener('click',function(event){
  formValidation()
  event.preventDefault()
  const formData = new FormData(form)
  console.log(serialize(formData))
});


//form validation
function formValidation(){
  //check required fields are filled in
  const inputs = document.getElementsByTagName('input')
  const requiredInputs = [...inputs].filter(input => input.hasAttribute('required'))
  for (let input of requiredInputs){
    if (input.value === '' || input.value == null){
      input.parentNode.classList.add('input-error')
    }
  }
}

window.addEventListener('load', (event) => {
  fillCompanyInfo();
});

function fillCompanyInfo(){
  company_logo.src = company.description.logo;
  job_title.innerHTML = company.description.title;
  job_location.innerHTML = company.location;
  general_description.innerHTML = company.description.general_description;
  responsibilities.appendChild(createUL(company.description.responsibilities,));
  qualities.appendChild(createUL(company.description.qualities));
  bonus.appendChild(createUL(company.description.bonus));
  benefits.appendChild(createUL(company.description.benefits));
  about.innerHTML = company.description.about;

}

function createUL(part,) {
  const ul = document.createElement('ul');
  ul.classList.add('list');
  for (let item of part) {
    const li = document.createElement('li')
    li.innerHTML = item;
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
    phoneNumber: '513-555-4664',
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
    phoneNumber: '513-555-3364',
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
    phoneNumber: '513-555-4124',
    description: 'I am a C# developer.',
    resume: {
      file: 'https://here'
    }
  }
]

const company =
  {
    name: 'Assemble',
    id: 1,
    location: 'remote',
    candidates: [1, 3, 5],
    description: {
      logo: 'https://storage.googleapis.com/dover-django/client-logos/aa5c4cc0-b95e-4de2-843c-efc17014a8f5-logo.png?2cv9ip1st',
      title: 'Fullstack Engineer',
      general_description: 'Assemble is an enterprise SaaS startup that is currently pre-launch. We are looking for a Founding Engineer to help us build our initial platform. We are currently a small team, so you\'ll have a lot of direct ownership on the product, our APIs, platform design, and engineering processes. Are you motivated by mission-driven problems, believe enterprise applications, too, should be beautiful and delightful product experiences, and are excited by the greenfield possibility of taking on a big problem in an even bigger market? If so, then you\'ve found the right match!',
      responsibilities: [
        'Design, build, and maintain the core product from the ground up alongside a small but seasoned engineering team.',
        'Collaborate with cross-functional teammates to understand customer requirements, come up with solutions, and ship iterations on a daily basis.',
        'Tackle a wide variety of technical problems throughout the stack and contribute to all parts of our product code base.',
        'Shape and improve engineering culture, standards, tooling, and processes.',
        'Help build a successful business that does well by doing good.',
      ],
      qualities: [
        'A full stack generalist with 3+ years of professional software development experience.',
        'Broadly knowledgeable about end-to-end web development and deeply knowledgeable in either frontend, backend, or DevOps/infrastructure.',
        'An excellent communicator with both words and code. You understand the importance of written and verbal communication skills for high-performing technical teams.',
        'Capable of seeing the "big picture" in ambiguous problems, driving elegant solutions, and having sharp attention to detail.',
        'Excited about building an engineering culture that\'s collaborative, high-velocity, intentional, and customer-focused.',
      ],
      bonus: [
        'You are familiar with React.js, Node.js, Postgres/SQL, and Google Cloud Platform/AWS.',
        'You have experience working at a startup, growing an engineering team, or building a new product.',
      ],
      benefits: [
        'Competitive cash and equity compensation',
        'Strong health benefits package',
        '401(k) program',
        'WFH productivity stipend',
        'Company meals and cultural events',
      ],
      about: 'Assemble is working to accelerate the world\'s transition to a future that is fair, equitable, consistent, competitive, and explainable. Founded in summer 2020 by early-stage operators, Assemble is based in San Francisco, CA with a presence in Denver, CO.'
    },
    //check out google forms and use poll linkedin structire
    jobListing: ''
  }