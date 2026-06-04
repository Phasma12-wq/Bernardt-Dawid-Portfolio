
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

    const dict = await getData('skills');
    if (!dict) return; // stop if fetch failed


    let count = 1;

    for (const [key, value] of Object.entries(dict)) {
        
        /* create div fo skill */
        const newDiv = document.createElement("div");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        
        newDiv.id = `skill-${count}`;
        newDiv.className = "skill-item";

        h2.innerText = key;

        const skills = Array.isArray(value) ? value.join(', ') : value;
        p.innerText = skills;


        newDiv.appendChild(h2);
        newDiv.appendChild(p);
        container.appendChild(newDiv);

        count+=1;
    }
}

/*
function displayEducation() {
    clearSection();

    const jsonString = await getData('education')

    const dict = JSON.parse(jsonString)
}

function displayProjects() {
    clearSection();

    const jsonString = await getData('projects')

    const dict = JSON.parse(jsonString)
}
*/

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
/*
document.querySelector('.Education_btn').addEventListener("click", displayEducation);
document.querySelector('.Projects_btn').addEventListener("click", displayProjects);
*/