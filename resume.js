// Get data from localStorage and display it
var resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');
var fullNameDisplay = document.getElementById('fullNameDisplay');
var emailDisplay = document.getElementById('emailDisplay');
var phoneDisplay = document.getElementById('phoneDisplay');
var degreeDisplay = document.getElementById('degreeDisplay');
var institutionDisplay = document.getElementById('institutionDisplay');
var yearDisplay = document.getElementById('yearDisplay');
var jobTitleDisplay = document.getElementById('jobTitleDisplay');
var jobDescriptionDisplay = document.getElementById('jobDescriptionDisplay');
var skillsDisplay = document.getElementById('skillsDisplay');
// Populate the fields with the resume data
fullNameDisplay.textContent = resumeData.fullName;
emailDisplay.textContent = "Email: ".concat(resumeData.email);
phoneDisplay.textContent = "Phone: ".concat(resumeData.phone);
degreeDisplay.textContent = resumeData.education.degree;
institutionDisplay.textContent = resumeData.education.institution;
yearDisplay.textContent = resumeData.education.year;
jobTitleDisplay.textContent = resumeData.job.title;
jobDescriptionDisplay.textContent = resumeData.job.description;
skillsDisplay.textContent = resumeData.skills;
// Handle the Edit Resume button
var editButton = document.getElementById('editButton');
editButton.addEventListener('click', function () {
    window.location.href = 'index.html'; // Go back to the form (index.html should be the form page)
});
// Handle the Download Resume button
var downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', function () {
    window.print();
});
// Generate the shareable link based on the user's full name
var shareableLink = document.getElementById('shareableLink');
var currentUrl = window.location.href;
var nameParam = encodeURIComponent(resumeData.fullName.replace(/\s+/g, '-').toLowerCase());
var fullLink = "".concat(currentUrl, "?user=").concat(nameParam);
shareableLink.textContent = fullLink;
// Copy link to clipboard
var copyLinkButton = document.getElementById('copyLinkButton');
copyLinkButton.addEventListener('click', function () {
    navigator.clipboard.writeText(fullLink).then(function () {
        alert('Link copied to clipboard!');
    });
});
