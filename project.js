// ==========================================
// PROJECTS CRUD
// ==========================================

// Get projects from localStorage
let projects =
    JSON.parse(localStorage.getItem("projects")) || [];


// Add default projects for first time
if (projects.length === 0) {

    projects.push("Personal Portfolio Website");
    projects.push("Student Management System");

    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );
}


// Projects container
let projectsContainer =
    document.getElementById("projectsContainer");


// Show projects
function showProjects() {

    projectsContainer.innerHTML = "";

    projects.forEach(function(project, index) {

        let projectCard =
            document.createElement("div");

        projectCard.className =
            "bg-slate-900 border border-slate-800 " +
            "rounded-xl p-6";

        projectCard.innerHTML = `
            <h3 class="text-xl font-semibold">
                ${project}
            </h3>

            <div class="mt-4 flex gap-2">

                <button
                    onclick="editProject(${index})"
                    class="rounded-lg bg-blue-500
                           px-4 py-2 text-sm
                           font-semibold text-white">

                    Edit

                </button>

                <button
                    onclick="deleteProject(${index})"
                    class="rounded-lg bg-red-500
                           px-4 py-2 text-sm
                           font-semibold text-white">

                    Delete

                </button>

            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}


// Show projects when page loads
showProjects();


// Add project
let projectInput =
    document.getElementById("projectInput");

let addProjectBtn =
    document.getElementById("addProjectBtn");


addProjectBtn.addEventListener("click", function() {

    let project =
        projectInput.value.trim();

    if (project === "") {
        alert("Please enter a project");
        return;
    }

    // Create
    projects.push(project);

    // Save to localStorage
    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );

    // Update screen
    showProjects();

    // Clear input
    projectInput.value = "";

});


// Delete project
function deleteProject(index) {

    projects.splice(index, 1);

    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );

    showProjects();
}


// Edit project
function editProject(index) {

    let newProject = prompt(
        "Enter new project:",
        projects[index]
    );

    if (newProject === null) {
        return;
    }

    newProject = newProject.trim();

    if (newProject === "") {
        alert("Project cannot be empty");
        return;
    }

    // Update
    projects[index] = newProject;

    // Save updated data
    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );

    // Update screen
    showProjects();
}

