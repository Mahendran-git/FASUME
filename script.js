const pages = {
    home: document.getElementById("home-page"),
    form: document.getElementById("form-page"),
    resume: document.getElementById("resume-page"),
};

const buttons = {
    getStarted: document.getElementById("get-started"),
    backToHome1: document.getElementById("back-to-home-1"),
    backToHome2: document.getElementById("back-to-home-2"),
    generateResume: document.getElementById("generate-resume"),
    downloadResume: document.getElementById("download-resume"),
};

const form = document.getElementById("resume-form");
const resumeDisplay = document.getElementById("resume-content");

buttons.getStarted.addEventListener("click", () => {
    pages.home.classList.remove("active");
    pages.form.classList.add("active");
});

buttons.backToHome1.addEventListener("click", () => {
    pages.form.classList.remove("active");
    pages.home.classList.add("active");
});

buttons.backToHome2.addEventListener("click", () => {
    pages.resume.classList.remove("active");
    pages.home.classList.add("active");
});

buttons.generateResume.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const summary = document.getElementById("summary").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const projects = document.getElementById("projects").value;
    const certifications = document.getElementById("certifications").value;
    const languages = document.getElementById("languages").value;
    const tools = document.getElementById("tools").value;
    const linkedinUrl = document.getElementById("linkedin-url").value;
    const borderColor = document.getElementById("resume-color").value;

    const resumeContent = `
        <h1 style="color: ${borderColor};">${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Summary:</strong> ${summary}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Projects</h4>
        <p>${projects}</p>
        <h4>Certifications</h4>
        <p>${certifications}</p>
        <h4>Languages</h4>
        <p>${languages}</p>
        <h4>Tools</h4>
        <p>${tools}</p>
        <p><strong>LinkedIn:</strong> <a href="${linkedinUrl}" target="_blank">${linkedinUrl}</a></p>
    `;

    resumeDisplay.innerHTML = resumeContent;
    pages.form.classList.remove("active");
    pages.resume.classList.add("active");
});


buttons.generateResume.addEventListener("click", () => {
    const resume = document.getElementById("resume-display");
    html2pdf().from(resume).save("Resume.pdf");
});
