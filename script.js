// Sample job data – you can later fetch this from a real database or localStorage
const jobs = [
    {
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Hyderabad",
      type: "Full-time",
      description: "Work with modern web technologies to create user interfaces."
    },
    {
      title: "Data Analyst Intern",
      company: "DataSense",
      location: "Bangalore",
      type: "Internship",
      description: "Analyze datasets and prepare business insights."
    },
    {
      title: "Backend Developer",
      company: "CloudGen",
      location: "Remote",
      type: "Part-time",
      description: "Work on scalable backend APIs using Node.js and MongoDB."
    }
  ];
  
  // Function to display job cards
  function displayJobs() {
    const jobContainer = document.getElementById("job-cards");
  
    jobs.forEach(job => {
      const jobCard = document.createElement("div");
      jobCard.classList.add("job-card");
  
      jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Type:</strong> ${job.type}</p>
        <p>${job.description}</p>
        <button>Apply Now</button>
      `;
  
      jobContainer.appendChild(jobCard);
    });
  }
  
  // Load jobs when the page is ready
  document.addEventListener("DOMContentLoaded", displayJobs);
  
  function openApplicationForm(role, company) {
    document.getElementById("job-role").innerText = `${role} at ${company}`;
    document.getElementById("application-form").classList.remove("hide");
  }
  
  function closeApplicationForm() {
    document.getElementById("application-form").classList.add("hide");
  }
  
  function submitApplication(e) {
    e.preventDefault();
    const name = document.getElementById("applicant-name").value;
    const email = document.getElementById("applicant-email").value;
    alert(`Thank you, ${name}! Your application has been submitted.`);
    closeApplicationForm();
    e.target.reset(); // Reset form fields
  }
  
