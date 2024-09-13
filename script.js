// // app.ts
var _a, _b, _c, _d, _e;
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
var resumeForm = document.getElementById('resumeForm');
var generateBtn = document.getElementById('generateBtn');
// Pre-fill the form with existing data if available
var resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');
var fullNameInput = document.getElementById('fullName');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var degreeInput = document.getElementById('degree');
var institutionInput = document.getElementById('institution');
var yearInput = document.getElementById('year');
var jobTitleInput = document.getElementById('jobTitle');
var jobDescriptionInput = document.getElementById('jobDescription');
var skillsInput = document.getElementById('skills');
// Set the form fields to existing data
if (resumeData) {
    fullNameInput.value = resumeData.fullName || '';
    emailInput.value = resumeData.email || '';
    phoneInput.value = resumeData.phone || '';
    degreeInput.value = ((_a = resumeData.education) === null || _a === void 0 ? void 0 : _a.degree) || '';
    institutionInput.value = ((_b = resumeData.education) === null || _b === void 0 ? void 0 : _b.institution) || '';
    yearInput.value = ((_c = resumeData.education) === null || _c === void 0 ? void 0 : _c.year) || '';
    jobTitleInput.value = ((_d = resumeData.job) === null || _d === void 0 ? void 0 : _d.title) || '';
    jobDescriptionInput.value = ((_e = resumeData.job) === null || _e === void 0 ? void 0 : _e.description) || '';
    skillsInput.value = resumeData.skills || '';
}
// Event listener for form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var fullName = fullNameInput.value.toUpperCase();
    var email = emailInput.value;
    var phone = phoneInput.value;
    var degree = degreeInput.value.toUpperCase();
    var institution = institutionInput.value.toUpperCase();
    var year = yearInput.value;
    var jobTitle = jobTitleInput.value.toUpperCase();
    var jobDescription = jobDescriptionInput.value;
    var skills = skillsInput.value.toUpperCase();
    // Create an object to store in local storage
    var resumeData = {
        fullName: fullName,
        email: email,
        phone: phone,
        education: {
            degree: degree,
            institution: institution,
            year: year,
        },
        job: {
            title: jobTitle,
            description: jobDescription,
        },
        skills: skills,
    };
    // Save data to localStorage
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    // Navigate to another page (e.g., resume.html)
    window.location.href = 'resume.html';
});
