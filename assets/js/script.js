var modalBoxEl = document.getElementsByClassName("modal-trigger");
let sampleModalEl = document.querySelector(".modal-content");
let modalHeaderEl = document.getElementsByClassName("modal-header");
let carouselItemEl = document.getElementsByClassName("carousel-item");
let carouselBtnEl = document.querySelector(".carousel-btn");
let targetCategory = "";
let projects = [];
let portfolio = [
  {
    title: "Digital Notebook",
    category: "HTML/CSS/JS",
    image: "assets/images/digitalNotebook.png",
    website: "https://pure-basin-17915.herokuapp.com/",
    github: "https://github.com/bk7711/digital-notebook",
  },
  {
    title: "Employee Tracker",
    category: "MySQL",
    image: "assets/images/employeeTracker.png",
    website:
      "https://drive.google.com/file/d/1IvZybPt6YWH8MmX6r6tbWuFUHGRPPXQV/view",
    github: "https://github.com/bk7711/employee_tracker",
  },
  {
    title: "Weather Dashboard",
    category: "HTML/CSS/JS",
    image: "assets/images/weather.png",
    website: "https://bk7711.github.io/weatherSearch",
    github: "https://github.com/bk7711/weatherSearch",
  },
  {
    title: "Horiseon",
    category: "HTML/CSS/JS",
    image: "assets/images/horiseon.png",
    website: "https://bk7711.github.io/horiseon/",
    github: "https://github.com/bk7711/horiseon",
  },
  {
    title: "Oui'd Cavern",
    category: "React/MERN",
    image: "assets/images/ouid_cavern.png",
    website: "https://fathomless-peak-27221.herokuapp.com/",
    github: "https://github.com/ChristanFox/silver-giggle",
  },
  {
    title: "Day Planner",
    category: "HTML/CSS/JS",
    image: "assets/images/dayPlanner.png",
    website: "https://bk7711.github.io/dayPlanner/",
    github: "https://github.com/bk7711/dayPlanner",
  },
  {
    title: "Photo Port",
    category: "React/MERN",
    image: "assets/images/photoPort.png",
    website: "#",
    github: "https://github.com/bk7711/photo-port",
  },
  {
    title: "Random Password",
    category: "HTML/CSS/JS",
    image: "assets/images/password.png",
    website: "https://bk7711.github.io/randomPassword",
    github: "https://github.com/bk7711/randomPassword",
  },
  {
    title: "Code Quiz",
    category: "HTML/CSS/JS",
    image: "assets/images/webpage.png",
    website: "https://bk7711.github.io/onlineQuiz/",
    github: "https://github.com/bk7711/CodeQuiz",
  },
  {
    title: "Readme Generator",
    category: "Node.js",
    image: "assets/images/readmeGenerator.png",
    website: "#",
    github: "https://github.com/bk7711/ReadmeGenerator",
  },
  {
    title: "Run Buddy",
    category: "HTML/CSS/JS",
    image: "assets/images/runbuddy.png",
    website: "https://bk7711.github.io/runbuddy/",
    github: "https://github.com/bk7711/runbuddy",
  },
  {
    title: "Git It Done",
    category: "HTML/CSS/JS",
    image: "assets/images/gitItDone.png",
    website: "https://bk7711.github.io/git-it-done/",
    github: "https://github.com/bk7711/git-it-done",
  },
  {
    title: "Pizza Hunt",
    category: "MongoDB",
    image: "assets/images/pizzaHunt.png",
    website: "#",
    github: "https://github.com/bk7711/pizza-hunt",
  },
  {
    title: "Task Master Pro",
    category: "HTML/CSS/JS",
    image: "assets/images/taskmasterPro.png",
    website: "https://bk7711.github.io/taskmaster-pro/",
    github: "https://github.com/bk7711/taskmaster-pro",
  },
];
//filter projects for category selected
const getProjects = () => {
  projects = portfolio.filter(function (project) {
    if (project.category == targetCategory) {
      return true;
    }
  });
  console.log(projects);
  displayProjects();
};

const displayProjects = () => {
  sampleModalEl.innerHTML = "";
  for (let i = 0; i < projects.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "sites");

    let cardImage = document.createElement("img");
    cardImage.setAttribute("class", "image");
    cardImage.setAttribute("src", projects[i].image);
    card.appendChild(cardImage);

    let viewSite = document.createElement("button");
    viewSite.setAttribute("class", "btn sitebtn");
    viewSite.innerHTML = `<a href="${projects[i].website}" target="_blank">View Website</a>`;
    card.appendChild(viewSite);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let title = document.createElement("h3");
    title.setAttribute("class", "title");
    title.textContent = projects[i].title;
    cardBody.appendChild(title);

    let github = document.createElement("a");
    github.setAttribute("href", projects[i].github);
    github.textContent = "Github Repository";
    github.setAttribute("class", "github");

    cardBody.appendChild(github);
    card.appendChild(cardBody);

    modalHeaderEl.textContent = targetCategory;

    sampleModalEl.appendChild(card);

    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, "inDuration");
    // instances.close(hide);
  }
};

//load portfolio carousel
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {
    padding: 10,
    dist: -20,
    onCycleTo: function (data) {
      let active = data.text;
      for (let i = 0; i < portfolio.length; i++) {
        if (active === portfolio[i].title) {
          carouselBtnEl.setAttribute("href", portfolio[i].website);
          carouselBtnEl.style.color = "var(--blues)";
        }
      }
    },
  });
});

//set click events and store target category
const setCategory = () => {
  for (var i = 0; i < modalBoxEl.length; i++) {
    modalBoxEl[i].addEventListener("click", function (e) {
      console.log(e.target);
      targetCategory = e.target.textContent;
      console.log(targetCategory);
      getProjects();
    });
  }
};

setCategory();
