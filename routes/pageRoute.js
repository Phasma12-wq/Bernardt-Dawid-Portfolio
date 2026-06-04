const express = require('express')
const router = express.Router();

const homeMainInfo = {
    name: "Bernardt Dawid van Greunen",
    degree: "Computing",
    aspiringCareer: "Software Developer",
    description: "I am a Bachelor of Computing student at Belgium Campus. I am fluent in Afrikaans and " +
    "English, and proficient in working with computers in general. I'm passionate about building " +
    " smart, scalable software solutions and exploring the intersection of technology and " +
    "innovation. With a strong foundation in both frontend and backend development, I enjoy " +
    "working on diverse projects—from web apps to intelligent drone systems."
}

const skills = [
    {name:"Programming", skills: ["C#", "Java", "Object-Oriented Programming (OOP)"], description: "Design software applications according to OOP principles"},
    {name:"Web Programming", skills: ["Javascript", "HTML", "CSS", "Node.js", "EJS"], description: "Basic reactive websites"},
    {name:"Database", skills: ["SQL", "Database Design"], description: "Basic Database design and queries"},
    {name:"Other", skills: ["Team Collaboration"], description: "Collaborate and communicate effectively with other teammates."}
]

const education = {
    "High School": {
        name: "H/S Wonderboom South",
        dateFrom: "02/01/2018",
        dateTo: "12/01/2022"
    },
    College: {
        name: "Belgium Campus ITversity",
        dateFrom: "02/01/2023",
        dateTo: "12/01/2026"
    }
}

const Projects = [
    {name: "StreetSync - Community Portal", stack: ["EJS", "Javascript", "CSS", "Express.js"], description: "We utilized what we learned from Web Programming in our 3rd year to develop a website that would run via node.js, in order to implement dynamic rendering via EJS.", link: "https://github.com/Phasma12-wq/WPR381_Group_Assignment.git"},
    {name: "BC Wellness Web App", stack: ["JavaDB", "Java", "Javascript", "CSS"], description: "We developed a Java desktop application to manage student wellness services at Belgium Campus. It was developed using Java Swing, and JavaDB, and it was designed using OOP principles and MVC architecture. The system provides counselors, students, and administrators with tools to manage appointments, counselor details, and student feedback.", link: "https://github.com/Phasma12-wq/WPR381_Group_Assignment.git"},
    {name: "Project CampusLearn", stack: ["EJS", "Javascript", "CSS", "Express.js"], description: "For our software engineering assignment, we developed a communication platform for Belgium Campus students, that could be navigated via a gpt chatbot that would perform basic function calling.", link: "https://github.com/DSReaper/Project_CampusLearn.git"}
]

router.get('/', (req, res) => {
    res.render('./pages/home', { page: 'home',  homeMainInfo });
})


router.get('/about', (req, res)=> {
    res.render('./pages/about', { page: 'about' });
})

router.get('/about/skills', (req, res)=> {
    res.json(skills);
})

router.get('/about/education', (req, res)=> {
    res.json(education);
})

router.get('/about/projects', (req, res)=> {
    res.json(Projects);
})

router.get('/get_CV', (req, res)=> {
    
})

module.exports = router;