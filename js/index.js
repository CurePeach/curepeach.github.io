

function revealInfo(button, infoId) {
  button.addEventListener("click", () => {
    const info = document.getElementById(infoId);
    if (info.classList.contains("inactive")) {
      info.classList.remove("inactive");
    } else {
      info.classList.add("inactive");
    }
  })
} 

const workExpTab = document.getElementById("work-exp");
revealInfo(workExpTab, "work-exp-info");

const skillsTab = document.getElementById("skills");
revealInfo(skillsTab, "skills-info");

const projectsTab = document.getElementById("projects");
revealInfo(projectsTab, "projects-info");

const hobbiesTab = document.getElementById("hobbies");
revealInfo(hobbiesTab, "hobbies-info");

const educationTab = document.getElementById("education");
revealInfo(educationTab, "education-info");