const express = require('express')
const router = express.Router();

const homeMainInfo = {
    name: "Bernardt Dawid van Greunen",
    degree: "Computing",
    aspiringCareer: "Developer",
    aboutfilelink: "/TextFiles/about.txt"
}

const aboutInfo = {
    location: "",
    Phone: "",
    Email: "",
    profileLinks: {
        LinkedIn: "",
        Github: ""
    },
    Languages: ["Afrikaans", "English"]
}

const skills = {
    Programming: ["C#", "Java"],
    WebProgramming: ["Javascript", "HTML", "CSS", "Node.js", "EJS"],
    Database: ["SQL", "Database Design"],
    Other: ["Team Collaboration", "Black-Box testing"]
}

const education = {
    highSchool: {
        name: "",
        dateFrom: "",
        dateTo: "",
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

router.get('/projects', (req, res)=> {
    res.render('./pages/about', { page: 'about' });
})

module.exports = router;