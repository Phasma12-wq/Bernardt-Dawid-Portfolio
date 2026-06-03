const express = require('express')
const router = express.Router();

const homeMainInfo = {
    name: "Bernardt Dawid van Greunen",
    degree: "Computing",
    aspiringCareer: "Software Developer",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
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
    res.render('./pages/home', { page: 'home',  homeMainInfo });
})


router.get('/about', (req, res)=> {
    res.render('./pages/about', { page: 'about' });
})

router.get('/get_CV', (req, res)=> {
    
})

module.exports = router;