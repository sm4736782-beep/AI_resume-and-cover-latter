 // === Resume Tab Switch ===
document.getElementById("resumeTabBtn").addEventListener("click", () => {
  document.getElementById("resumeSection").classList.add("active");
  document.getElementById("coverSection").classList.remove("active");
  document.getElementById("resumeTabBtn").classList.add("active");
  document.getElementById("coverTabBtn").classList.remove("active");
});

// === Cover Tab Switch ===
document.getElementById("coverTabBtn").addEventListener("click", () => {
  document.getElementById("coverSection").classList.add("active");
  document.getElementById("resumeSection").classList.remove("active");
  document.getElementById("coverTabBtn").classList.add("active");
  document.getElementById("resumeTabBtn").classList.remove("active");
});

// === Set Today's Date for Cover Letter ===
function setToday() {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("coverDate").value = today;
}

// === Resume Generator Preview ===
document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const location = form.address.value;
  const dob = form.dob.value;
  const education = form.education.value;
  const qualification = form.qualification.value;
  const skills = form.skills.value;
  const hobbies = form.hobbies.value;
  const summary = form.summary.value;

  const htmlPreview = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
    <p><strong>Location:</strong> ${location} | <strong>DOB:</strong> ${dob}</p>
    <hr/>
    <h3>🎓 Education</h3>
    <p>${education}</p>
    <h3>📜 Certifications</h3>
    <p>${qualification}</p>
    <h3>🛠️ Skills</h3>
    <p>${skills}</p>
    <h3>🎯 Interests</h3>
    <p>${hobbies}</p>
    <h3>💬 Summary</h3>
    <p>${summary}</p>
  `;

  document.getElementById("resumePreview").innerHTML = htmlPreview;
});

// === Cover Letter Generator ===
document.getElementById("coverForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const company = form.company.value || "the company";
  const position = form.position.value || "the position";
  const manager = form.manager.value || "Hiring Manager";
  const description = form.description.value;
  const date = form.date.value || new Date().toISOString().split("T")[0];

  const letterHTML = `
    <p>${date}</p>
    <p>${manager}<br>${company}</p>
    <br>
    <p>Dear ${manager},</p>
    <p>I am writing to express my interest in the <strong>${position}</strong> role at ${company}. I believe my background and skills align well with the job requirements.</p>
    <p>${description}</p>
    <p>Thank you for considering my application. I look forward to the opportunity to contribute to your team.</p>
    <br>
    <p>Sincerely,<br>${name}<br>${email}</p>
  `;

  document.getElementById("coverPreview").innerHTML = letterHTML;
});
