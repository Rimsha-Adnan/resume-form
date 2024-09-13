// // app.ts

// // Get the form and button elements
// const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
// const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;

// // Event listener for form submission
// resumeForm.addEventListener('submit', (event: Event) => {
//   event.preventDefault();

//   // Get form values
//   const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
//   const email = (document.getElementById('email') as HTMLInputElement).value;
//   const phone = (document.getElementById('phone') as HTMLInputElement).value;
//   const degree = (document.getElementById('degree') as HTMLInputElement).value;
//   const institution = (document.getElementById('institution') as HTMLInputElement).value;
//   const year = (document.getElementById('year') as HTMLInputElement).value;
//   const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
//   const jobDescription = (document.getElementById('jobDescription') as HTMLTextAreaElement).value;
//   const skills = (document.getElementById('skills') as HTMLInputElement).value;

//   // Create an object to store in local storage
//   const resumeData = {
//     fullName,
//     email,
//     phone,
//     education: {
//       degree,
//       institution,
//       year,
//     },
//     job: {
//       title: jobTitle,
//       description: jobDescription,
//     },
//     skills,
//   };

//   // Save data to localStorage
//   localStorage.setItem('resumeData', JSON.stringify(resumeData));

//   // Navigate to another page (e.g., resume.html)
//   window.location.href = 'resume.html';
// });


// app.ts

// Get the form and button elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;

// Pre-fill the form with existing data if available
const resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');

const fullNameInput = document.getElementById('fullName') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;

const degreeInput = document.getElementById('degree') as HTMLInputElement;
const institutionInput = document.getElementById('institution') as HTMLInputElement;
const yearInput = document.getElementById('year') as HTMLInputElement;

const jobTitleInput = document.getElementById('jobTitle') as HTMLInputElement;
const jobDescriptionInput = document.getElementById('jobDescription') as HTMLTextAreaElement;

const skillsInput = document.getElementById('skills') as HTMLInputElement;

// Set the form fields to existing data
if (resumeData) {
  fullNameInput.value = resumeData.fullName || '';
  emailInput.value = resumeData.email || '';
  phoneInput.value = resumeData.phone || '';

  degreeInput.value = resumeData.education?.degree || '';
  institutionInput.value = resumeData.education?.institution || '';
  yearInput.value = resumeData.education?.year || '';

  jobTitleInput.value = resumeData.job?.title || '';
  jobDescriptionInput.value = resumeData.job?.description || '';

  skillsInput.value = resumeData.skills || '';
}

// Event listener for form submission
resumeForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Get form values
  const fullName = fullNameInput.value.toUpperCase();
  const email = emailInput.value;
  const phone = phoneInput.value;
  const degree = degreeInput.value.toUpperCase();
  const institution = institutionInput.value.toUpperCase();
  const year = yearInput.value;
  const jobTitle = jobTitleInput.value.toUpperCase();
  const jobDescription = jobDescriptionInput.value;
  const skills = skillsInput.value.toUpperCase();

  // Create an object to store in local storage
  const resumeData = {
    fullName,
    email,
    phone,
    education: {
      degree,
      institution,
      year,
    },
    job: {
      title: jobTitle,
      description: jobDescription,
    },
    skills,
  };

  // Save data to localStorage
  localStorage.setItem('resumeData', JSON.stringify(resumeData));

  // Navigate to another page (e.g., resume.html)
  window.location.href = 'resume.html';
});
