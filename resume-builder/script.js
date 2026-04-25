function generateResume() {
    document.getElementById("pName").innerText =
        document.getElementById("name").value;

    document.getElementById("pEmail").innerText =
        document.getElementById("email").value;

    document.getElementById("pPhone").innerText =
        document.getElementById("phone").value;

    document.getElementById("pSummary").innerText =
        document.getElementById("summary").value;

    document.getElementById("pEducation").innerText =
        document.getElementById("education").value;

    document.getElementById("pExperience").innerText =
        document.getElementById("experience").value;

    document.getElementById("pProjects").innerText =
        document.getElementById("projects").value;


    let skills = document.getElementById("skills").value.split(",");
    let skillList = document.getElementById("pSkills");
    skillList.innerHTML = "";

    skills.forEach(skill => {
        let li = document.createElement("li");
        li.innerText = skill.trim();
        skillList.appendChild(li);
    });
    console.log(document.getElementById("projects").value);
}

function clearAll() {

   
    document.getElementById("resumeForm").reset();

    document.getElementById("pName").innerText = "Your Name";
    document.getElementById("pEmail").innerText = "";
    document.getElementById("pPhone").innerText = "";
    document.getElementById("pSummary").innerText = "";
    document.getElementById("pEducation").innerText = "";
    document.getElementById("pExperience").innerText = "";
    document.getElementById("pProjects").innerText = "";

    document.getElementById("pSkills").innerHTML = "";
}