// Sample job data (could be later from localStorage too)
const jobs = [
    {
      title: "Frontend Developer",
      company: "Web Innovators",
      location: "Hyderabad",
      type: "Full-time"
    },
    {
      title: "Marketing Intern",
      company: "GrowthHackers",
      location: "Bangalore",
      type: "Internship"
    },
    {
      title: "Data Entry",
      company: "OfficeMate",
      location: "Remote",
      type: "Part-time"
    }
  ];
  
  // Display jobs
  function displayJobs(jobList) {
    const jobContainer = document.getElementById("job-list");
    jobContainer.innerHTML = "";
  
    if (jobList.length === 0) {
      jobContainer.innerHTML = "<p>No jobs found.</p>";
      return;
    }
  
    jobList.forEach(job => {
      const jobCard = document.createElement("div");
      jobCard.classList.add("job-card");
  
      jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Type:</strong> ${job.type}</p>
      `;
  
      jobContainer.appendChild(jobCard);
    });
  }
  
  // Filter jobs
  function filterJobs() {
    const location = document.getElementById("location-filter").value;
    const type = document.getElementById("type-filter").value;
  
    const filtered = jobs.filter(job =>
      (location === "All" || job.location === location) &&
      (type === "All" || job.type === type)
    );
  
    displayJobs(filtered);
  }
  
  // Initial display
  document.addEventListener("DOMContentLoaded", () => {
    displayJobs(jobs);
  
    document.getElementById("filter-btn").addEventListener("click", filterJobs);
  });
  
