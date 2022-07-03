var modalBoxEl = document.querySelector(".modal-trigger");

let portfolio = [
  {
    title: "Digital Notebook",
    category: "HTML/CSS/JS",
    image: "../images/digitalNotebook.png",
    website: "https://pure-basin-17915.herokuapp.com/",
    github: "https://github.com/bk7711/digital-notebook",
  },
  {
    title: "Employee Tracker",
    category: "MySQL",
    image: "#",
    website:
      "https://drive.google.com/file/d/1IvZybPt6YWH8MmX6r6tbWuFUHGRPPXQV/view",
    github: "https://github.com/bk7711/employee_tracker",
  },
  {
    title: "Weather Dashboard",
    category: "HTML/CSS/JS",
    image: "../images/weather.png",
    website: "https://bk7711.github.io/weatherSearch",
    github: "https://github.com/bk7711/weatherSearch",
  },
  {
    title: "Horiseon",
    category: "HTML/CSS/JS",
    image: "../images/horiseon.png",
    website: "https://bk7711.github.io/horiseon/",
    github: "https://github.com/bk7711/horiseon",
  },
  {
    title: "Oui'd Cavern",
    category: "React/MERN",
    image: "../images/ouid_cavern.png",
    website: "https://fathomless-peak-27221.herokuapp.com/",
    github: "https://github.com/ChristanFox/silver-giggle",
  },
  {
    title: "Day Planner",
    category: "HTML/CSS/JS",
    image: "../images/dayPlanner.png",
    website: "https://bk7711.github.io/dayPlanner/",
    github: "https://github.com/bk7711/dayPlanner",
  },
  {
    title: "Photo Port",
    category: "React/MERN",
    image: "../images/photoPort.png",
    website: "#",
    github: "https://github.com/bk7711/photo-port",
  },
  {
    title: "Random Password",
    category: "HTML/CSS/JS",
    image: "../images/password.png",
    website: "https://bk7711.github.io/randomPassword",
    github: "https://github.com/bk7711/randomPassword",
  },
  {
    title: "Code Quiz",
    category: "HTML/CSS/JS",
    image: "../images/webpage.png",
    website: "https://bk7711.github.io/onlineQuiz/",
    github: "https://github.com/bk7711/CodeQuiz",
  },
  {
    title: "Readme Generator",
    category: "Node.js",
    image: "../images/readmeGenerator.png",
    website: "#",
    github: "https://github.com/bk7711/ReadmeGenerator",
  },
  {
    title: "Run Buddy",
    category: "HTML/CSS/JS",
    image: "../images/runbuddy.png",
    website: "https://bk7711.github.io/runbuddy/",
    github: "https://github.com/bk7711/runbuddy",
  },
  {
    title: "Git It Done",
    category: "HTML/CSS/JS",
    image: "../images/gitItDone.png",
    website: "https://bk7711.github.io/git-it-done/",
    github: "https://github.com/bk7711/git-it-done",
  },
  {
    title: "Pizza Hunt",
    category: "MongoDB",
    image: "../images/pizzaHunt.png",
    website: "#",
    github: "https://github.com/bk7711/pizza-hunt",
  },
];

let getProjects = () => {
  let projects = portfolio.filter();
};

modelBoxEl.addEventListener("click", getProjects());
