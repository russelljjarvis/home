// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Russell",
  middleName: "",
  lastName: "Jarvis",
  profilePictureLink: require("../editable-stuff/juggling.png"),
  message: "Passionate about Julia Language and Machine Learning for social good. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/russelljjarvis",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/russell-jarvis-jarrod/",
    },
  {
    image: "fa-stack-overflow",
    url: "https://stackexchange.com/users/1569505/russell-jarvis",
  },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "",//require("../editable-stuff/bicycle.jpg"),
  imageSize: "",//175,
  message:"My name is Russell Jarvis, I have graduate degrees in Biomedical Engineering (MA) and Neuroscience (PhD). I am a long term FOSS data science developer. I am experienced in machine learning software development especially genetic algorithm optimization using Python and Julia. I have a long history of participating in social coding practices and living abroad. I am currently a developer in a project that involves using Julia to do data-fitting of electrical neuronal models. My main computer is currently an NVIDIA Jetson Nano (ARM architercture). I spend a lot of my spare time and money on improving native vegetation.",
  resume: require('../editable-stuff/resume.pdf')
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "russelljjarvis", //i.e."johnDoe12Gh"
  reposLength: 8,
  specificRepos: ["https://github.com/russelljjarvis/SpikeNetOpt.jl","https://github.com/russelljjarvis/jit_hub","https://github.com/russelljjarvis/ScienceAccess","https://github.com/russelljjarvis/BluePyOpt"],
};

// Leadership SECTION

const leadership = {
  show: true,
  heading: "Leadership",
  message:"<p>I have not occupied leadership roles, but I have demonstrated social and professional leadership skills for example:</p><p>I have written to the Mt Alexander council with a proposal about what it would mean to declare a climate emergency.<\p><p>I have been invited to join a volunteer web scraping project. I noticed that the voluntary project was aligned with FOSS principles but was not currently using them. When I joined the team as a volunteer, I used my influence and initiative to:  Switch the team from MATLAB to Python-based development. I also got the team to adopt Continuous Integration and social coding practices. I set up a Git repository, a docker container, and a CircleCI .yml script. I later convinced the team of developers and writers to publish in the Journal of Open Source software and write a Preprint paper on the Open Science Portal.<\p><p>At the Arizona State University, night of the Open Door (a science outreach evening), I convinced my laboratory to visualize 3D neurons we were modelling in virtual reality, using a merge-cube. Since our lab was a theoretical and computational lab, using virtual reality greatly boosted communication of abstract knowlege.<\p>",
  images: [],
    imageSize: {
    width:"615",
    height:"450"
  }
};

/*const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};*/

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Julia-Language", value: 78 },
    { name: "Machine Learning", value: 75 },
    { name: "Optimization", value: 85 },
    { name: "Python", value: 90 },
    { name: "Linux/BASH", value: 85 },
    { name: "Numba JIT", value: 70 },
    { name: "R-Language", value: 60 },
    { name: "LaTeX/Overleaf", value: 65 },
    { name: "Git/CI", value: 95 },
    { name: "Dask", value: 80 },
    { name: "Docker", value: 70 },

  ],
  softSkills: [
    { name: "Empathy", value: 90 },
    { name: "Creativity", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Goal-Oriented", value: 80 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 65 },
    { name: "Problem Solving", value: 85 },
    { name: "Organization", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am currently looking for work in Data Science and or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "russelljarvis@protonmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences"
}
/*
const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}
*/
// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
