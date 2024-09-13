// app.ts
// Get the form and button elements
var resumeForm = document.getElementById('resumeForm');
var generateBtn = document.getElementById('generateBtn');
// Event listener for form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var year = document.getElementById('year').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var jobDescription = document.getElementById('jobDescription').value;
    var skills = document.getElementById('skills').value;
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
