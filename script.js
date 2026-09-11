
// ==========================================
// SKILLS CRUD
// ==========================================

// Get skills from localStorage
let skills = JSON.parse(localStorage.getItem("skills")) || [];


// Add default skills for first time
if (skills.length === 0) {
    skills.push("HTML");
    skills.push("CSS");
    skills.push("JavaScript");

    localStorage.setItem("skills", JSON.stringify(skills));
}


// Skills container
let skillsContainer = document.getElementById("skillsContainer");


// Show skills
function showSkills() {

    skillsContainer.innerHTML = "";

    skills.forEach(function(skill, index) {

        let skillCard = document.createElement("div");

        skillCard.className =
            "bg-slate-900 border border-slate-800 " +
            "rounded-xl p-6 text-center";

        skillCard.innerHTML = `
            <h3 class="text-xl font-semibold">
                ${skill}
            </h3>

            <div class="mt-4 flex justify-center gap-2">

                <button
                    onclick="editSkill(${index})"
                    class="rounded-lg bg-blue-500
                           px-4 py-2 text-sm
                           font-semibold text-white">

                    Edit

                </button>

                <button
                    onclick="deleteSkill(${index})"
                    class="rounded-lg bg-red-500
                           px-4 py-2 text-sm
                           font-semibold text-white">

                    Delete

                </button>

            </div>
        `;

        skillsContainer.appendChild(skillCard);
    });
}


// Show skills when page loads
showSkills();


// Add skill
let skillInput = document.getElementById("skillInput");
let addSkillBtn = document.getElementById("addSkillBtn");


addSkillBtn.addEventListener("click", function() {

    let skill = skillInput.value.trim();

    if (skill === "") {
        alert("Please enter a skill");
        return;
    }

    // Create
    skills.push(skill);

    // Save to localStorage
    localStorage.setItem("skills", JSON.stringify(skills));

    // Update screen
    showSkills();

    // Clear input
    skillInput.value = "";

});


// Delete skill
function deleteSkill(index) {

    skills.splice(index, 1);

    localStorage.setItem("skills", JSON.stringify(skills));

    showSkills();
}


// Edit skill
function editSkill(index) {

    let newSkill = prompt(
        "Enter new skill:",
        skills[index]
    );

    if (newSkill === null) {
        return;
    }

    newSkill = newSkill.trim();

    if (newSkill === "") {
        alert("Skill cannot be empty");
        return;
    }

    // Update
    skills[index] = newSkill;

    // Save updated data
    localStorage.setItem("skills", JSON.stringify(skills));

    // Update screen
    showSkills();
}



// ==========================================
// EXPERIENCE CRUD
// ==========================================

// Get experiences from localStorage
let experiences =
    JSON.parse(localStorage.getItem("experiences")) || [];


// Add default experiences for first time
if (experiences.length === 0) {

    experiences.push("Learning HTML & CSS");
    experiences.push("Learning JavaScript");

    localStorage.setItem(
        "experiences",
        JSON.stringify(experiences)
    );
}


// Experience container
let experienceContainer =
    document.getElementById("experienceContainer");


// Show experiences
function showExperiences() {

    experienceContainer.innerHTML = "";

    experiences.forEach(function(experience, index) {

        let experienceCard =
            document.createElement("div");

        experienceCard.className =
            "bg-slate-900 border border-slate-800 " +
            "rounded-xl p-6";

        experienceCard.innerHTML = `
            <h3 class="text-xl font-semibold">
                ${experience}
            </h3>

            <div class="mt-4 flex gap-2">

                <button
                    onclick="editExperience(${index})"
                    class="rounded-lg bg-blue-500
                           px-4 py-2 text-sm
                           font-semibold text-white">

                    Edit

                </button>

                <button
                    onclick="deleteExperience(${index})"
                    class="rounded-lg bg-red-500
                           px-4 py-2 text-sm
                           font-semibold text-white">

                    Delete

                </button>

            </div>
        `;

        experienceContainer.appendChild(experienceCard);
    });
}


// Show experiences when page loads
showExperiences();


// Add experience
let experienceInput =
    document.getElementById("experienceInput");

let addExperienceBtn =
    document.getElementById("addExperienceBtn");


addExperienceBtn.addEventListener("click", function() {

    let experience =
        experienceInput.value.trim();

    if (experience === "") {
        alert("Please enter an experience");
        return;
    }

    // Create
    experiences.push(experience);

    // Save to localStorage
    localStorage.setItem(
        "experiences",
        JSON.stringify(experiences)
    );

    // Update screen
    showExperiences();

    // Clear input
    experienceInput.value = "";

});


// Delete experience
function deleteExperience(index) {

    experiences.splice(index, 1);

    localStorage.setItem(
        "experiences",
        JSON.stringify(experiences)
    );

    showExperiences();
}


// Edit experience
function editExperience(index) {

    let newExperience = prompt(
        "Enter new experience:",
        experiences[index]
    );

    if (newExperience === null) {
        return;
    }

    newExperience = newExperience.trim();

    if (newExperience === "") {
        alert("Experience cannot be empty");
        return;
    }

    // Update
    experiences[index] = newExperience;

    // Save updated data
    localStorage.setItem(
        "experiences",
        JSON.stringify(experiences)
    );

    // Update screen
    showExperiences();
}



