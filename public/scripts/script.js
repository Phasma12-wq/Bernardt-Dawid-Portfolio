
/*
    3 sections:
    - Skills
    - Education
    - Projects

    step 1 for each section: Clear section

*/

const container = document.querySelector('.about-section');

function clearSection() {
    container.innerHTML = "";
}

async function displaySkills() {
    clearSection();

    const skills = await getData('skills');
    if (!skills) return; // stop if fetch failed


    skills.forEach((sk, index) => {
        const newDiv = document.createElement("div");
        newDiv.id = `skill-${index+1}`;
        newDiv.className = "skill-item";


        const h2 = document.createElement("h2");
        h2.innerText = sk.name;

        const p = document.createElement("p");
        p.innerText = Array.isArray(sk.skills) ? sk.skills.join(", ") : sk.skills;

        const desc = document.createElement("p");
        desc.innerText = sk.description || "";

        newDiv.appendChild(h2);
        newDiv.appendChild(p);
        newDiv.appendChild(desc);

        container.appendChild(newDiv);
    })

}

async function displayEducation() {
    clearSection();


    const dict = await getData('education');
    if (!dict) return; // stop if fetch failed


    let count = 1;

    for (const [key, value] of Object.entries(dict)) {
        const newDiv = document.createElement("div");
        newDiv.id = `edu-${count}`;
        newDiv.className = "education-item";


        const h2 = document.createElement("h2");
        h2.innerText = value.name;



        const ul = document.createElement("ul");

        const shortFormat_from = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }).format(new Date(value.dateFrom));

        const shortFormat_to = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }).format(new Date(value.dateTo));

        const li_dates = document.createElement("li")
        li_dates.innerText = `${shortFormat_from} - ${shortFormat_to}`
        ul.appendChild(li_dates)
    

        newDiv.appendChild(h2);
        newDiv.appendChild(ul);
        container.appendChild(newDiv);

        count+=1;
    }
}


async function displayProjects() {
    clearSection();

    const projects = await getData('projects')
    if (!projects) return;

    projects.forEach((proj, index) => {
        const newDiv = document.createElement("div");
        newDiv.id = `prj-${index+1}`;
        newDiv.className = "project-item";

        const h2 = document.createElement("h2");
        h2.innerText = proj.name || "Untitled Project";
        
        const p = document.createElement("p");
        p.innerText = proj.description || "No description provided";

        const div = document.createElement("div");
        div.innerText = `Techstack: ${proj.stack.join(', ')}`

        const a = document.createElement("a");
        a.className = "project_link";
        a.href = proj.link || "#";
        a.innerText = "View Project";

        newDiv.appendChild(h2);
        newDiv.appendChild(p);
        newDiv.appendChild(div);
        newDiv.appendChild(a);

        container.appendChild(newDiv);
    });
}

async function getData(path) {
  try {
    const response = await fetch(`http://localhost:3000/about/${path}`);
    if (!response.ok) throw new Error("Network error: " + response.status);
    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}

document.querySelector('.Skills_btn').addEventListener("click", displaySkills);
document.querySelector('.Education_btn').addEventListener("click", displayEducation);
document.querySelector('.Projects_btn').addEventListener("click", displayProjects);



function highlightNav(current_page) {
    const home_link = document.getElementById("home");
    const about_link = document.getElementById("about");

    console.log(current_page)

    if(current_page === "about") {
        displaySkills();

        about_link.style.border = "2px solid black";
        about_link.style.backgroundColor = "#828282";
    } else {
        home_link.style.border = "2px solid black";
        home_link.style.backgroundColor = "#828282";
    }
}