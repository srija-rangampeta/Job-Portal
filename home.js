document.addEventListener("DOMContentLoaded", () => {
    const jobs = [
      {
        title: "Frontend Developer",
        company: "TechNova Inc.",
        location: "Hyderabad",
        type: "Full-time",
      },
      {
        title: "Data Analyst Intern",
        company: "DataVista",
        location: "Bengaluru",
        type: "Internship",
      },
      {
        title: "UI/UX Designer",
        company: "Designify",
        location: "Remote",
        type: "Part-time",
      },
    ];
  
    const latestJobsDiv = document.getElementById("latestJobs");
  
    jobs.forEach(job => {
      const jobCard = document.createElement("div");
      jobCard.className = "job-card";
      jobCard.innerHTML = `
        <h4>${job.title}</h4>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Type:</strong> ${job.type}</p>
      `;
      latestJobsDiv.appendChild(jobCard);
    });
  });
  
