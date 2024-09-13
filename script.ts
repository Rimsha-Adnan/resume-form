// app.ts

// Get the form and button elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;

// Event listener for form submission
resumeForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Get form values
  const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const institution = (document.getElementById('institution') as HTMLInputElement).value;
  const year = (document.getElementById('year') as HTMLInputElement).value;
  const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
  const jobDescription = (document.getElementById('jobDescription') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

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
