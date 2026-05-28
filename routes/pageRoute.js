const express = require('express')
const router = express.Router();

const homeMainInfo = {
    name: "Bernardt Dawid van Greunen",
    degree: "Computing",
    aspiringCareer: "Developer",
    aboutfilelink: "/TextFiles/about.txt"
}

const aboutInfo = {
    Phone: "(+27)65 388 5534",
    Email: "",
    profileLinks: {
        LinkedIn: "",
        Github: ""
    },
    Languages: ["Afrikaans", "English"]
}

const skills = {
    Programming: ["C#", "Java", "Object-Oriented Programming (OOP)"],
    WebProgramming: ["Javascript", "HTML", "CSS", "Node.js", "EJS"],
    Database: ["SQL", "Database Design"],
    Other: ["Team Collaboration", "Black-Box testing"]
}

const education = {
    highSchool: {
        name: "H/S Wonderboom South",
        dateFrom: "01/02/2018",
        dateTo: "01/12/2022",
        certificate: ""
    },
    college: {
        name: "",
        dateFrom: "",
        dateTo: "",
        certificate: ""
    }
}

const Projects = [
    {name: "", description: "", link: ""},
    {name: "", description: "", link: ""},
    {name: "", description: "", link: ""}
]

router.get('/', (req, res) => {
    res.render('./pages/home', { page: 'home' });
})


router.get('/about', (req, res)=> {
    res.render('./pages/about', { page: 'about' });
})

router.get('/skills', (req, res)=> {
    res.render('./pages/skills', { page: 'skills' });
})

router.get('/projects', (req, res)=> {
    res.render('./pages/projects', { page: 'projects' });
})

router.get('/get_CV', (req, res)=> {
    
})

module.exports = router;