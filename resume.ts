// Get data from localStorage and display it
const resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');

const fullNameDisplay = document.getElementById('fullNameDisplay') as HTMLHeadingElement;
const emailDisplay = document.getElementById('emailDisplay') as HTMLParagraphElement;
const phoneDisplay = document.getElementById('phoneDisplay') as HTMLParagraphElement;

const degreeDisplay = document.getElementById('degreeDisplay') as HTMLSpanElement;
const institutionDisplay = document.getElementById('institutionDisplay') as HTMLSpanElement;
const yearDisplay = document.getElementById('yearDisplay') as HTMLSpanElement;

const jobTitleDisplay = document.getElementById('jobTitleDisplay') as HTMLSpanElement;
const jobDescriptionDisplay = document.getElementById('jobDescriptionDisplay') as HTMLSpanElement;

const skillsDisplay = document.getElementById('skillsDisplay') as HTMLParagraphElement;

// Populate the fields with the resume data
fullNameDisplay.textContent = resumeData.fullName;
emailDisplay.textContent = `Email: ${resumeData.email}`;
phoneDisplay.textContent = `Phone: ${resumeData.phone}`;
degreeDisplay.textContent = resumeData.education.degree;
institutionDisplay.textContent = resumeData.education.institution;
yearDisplay.textContent = resumeData.education.year;
jobTitleDisplay.textContent = resumeData.job.title;
jobDescriptionDisplay.textContent = resumeData.job.description;
skillsDisplay.textContent = resumeData.skills;

// Handle the Edit Resume button
const editButton = document.getElementById('editButton') as HTMLButtonElement;
editButton.addEventListener('click', () => {
  window.location.href = 'index.html'; // Go back to the form (index.html should be the form page)
});

// Handle the Download Resume button
const downloadButton = document.getElementById('downloadButton') as HTMLButtonElement;
downloadButton.addEventListener('click', () => {
  window.print();
});

// Generate the shareable link based on the user's full name
const shareableLink = document.getElementById('shareableLink') as HTMLSpanElement;
const currentUrl = window.location.href;
const nameParam = encodeURIComponent(resumeData.fullName.replace(/\s+/g, '-').toLowerCase());
const fullLink = `${currentUrl}?user=${nameParam}`;
shareableLink.textContent = fullLink;

// Copy link to clipboard
const copyLinkButton = document.getElementById('copyLinkButton') as HTMLButtonElement;
copyLinkButton.addEventListener('click', () => {
  navigator.clipboard.writeText(fullLink).then(() => {
    alert('Link copied to clipboard!');
  });
});
