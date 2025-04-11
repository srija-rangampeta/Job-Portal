// Static job data
const jobs = [
  {
    title: "Frontend Developer",
    company: "TechNova",
    location: "Hyderabad",
    jobType: "Full-time",
    description: "Work with React.js and create beautiful UIs."
  },
  {
    title: "Graphic Designer",
    company: "CreativePixels",
    location: "Mumbai",
    jobType: "Part-time",
    description: "Design graphics for social media and web."
  }
];

function displayJobs(filterLocation, filterType) {
  const jobList = document.getElementById("jobList");
  jobList.innerHTML = "";

  const filteredJobs = jobs.filter(job => {
    return (
      (!filterLocation || job.location.toLowerCase().includes(filterLocation.toLowerCase())) &&
      (!filterType || job.jobType === filterType)
    );
  });

  if (filteredJobs.length === 0) {
    jobList.innerHTML = "<p>No jobs found matching your criteria.</p>";
    return;
  }

  filteredJobs.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.className = "card mb-3";
    jobCard.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${job.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${job.location} | ${job.jobType}</h6>
        <p class="card-text">${job.description}</p>
        <button class="btn btn-primary" onclick="openApplicationForm('${job.title}', '${job.company}')">Apply</button>
      </div>
    `;
    jobList.appendChild(jobCard);
  });
}

document.getElementById("filterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const location = document.getElementById("filterLocation").value;
  const type = document.getElementById("filterType").value;
  displayJobs(location, type);
});

function openApplicationForm(jobTitle, companyName) {
  const role = `${jobTitle} at ${companyName}`;
  document.getElementById("job-role").innerText = role;
  document.getElementById("application-form").classList.remove("hide");
}

function closeApplicationForm() {
  document.getElementById("application-form").classList.add("hide");
}

function submitApplication(e) {
  e.preventDefault();
  const name = document.getElementById("applicant-name").value;
  const email = document.getElementById("applicant-email").value;
  const msg = document.getElementById("applicant-message").value;
  const role = document.getElementById("job-role").innerText;

  if (name && email && msg) {
    alert(`Thanks ${name}! 🎉\nYou have successfully applied for ${role}.`);
    e.target.reset();
    closeApplicationForm();
  } else {
    alert("Please fill in all fields before submitting.");
  }
}

// Initial call
displayJobs();
