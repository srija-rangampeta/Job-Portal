function postJob(title, location, jobType, description) {
    const newJob = {
      title,
      location,
      jobType,
      description,
      postedAt: new Date().toISOString(),
    };
  
    const existingJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    existingJobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(existingJobs));
  
    alert("Job posted successfully!");
  }
  
  document.getElementById("jobForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("jobTitle").value;
    const location = document.getElementById("location").value;
    const jobType = document.getElementById("jobType").value;
    const description = document.getElementById("jobDesc").value;
  
    postJob(title, location, jobType, description);
    this.reset();
  });
  
