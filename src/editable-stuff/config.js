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
  imageLink: require("../editable-stuff/me_nature.png"),
  imageSize: 375,
  message: "Passionate about environmental health, computer vision, and remote sensing and geospatial science.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/russelljjarvis",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/russell-jarvis-jarrod/",
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
  imageLink: require("../editable-stuff/tropical.jpeg"),
  imageSize: 375,
  message:"Hi, this is Russell. I am a former scientific software developer in Computational Neuroscience who has since moved into the commercial remote sensing and computer vision industry. The machine learning techniques I applied to brain imaging translate naturally to automated detection and labelling of environmental features in drone imagery.\n\nI have previously built data-driven web dashboards and applications, though most of them are no longer online.\n\nI spend much of my spare time and resources supporting native vegetation restoration. I hold graduate degrees in Biomedical Engineering (MA) and Computational Neuroscience (PhD).",
  resume: null
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Drone Analysis Projects",
  gitHubUsername: "russelljjarvis", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [],
  customProjects: [
    {
      customProject: true,
      name: "Drone Tern Census with U-Net",
      description:
        "End-to-end drone imagery workflow for crested tern colony detection on Lady Elliot Island, Bundaberg. The U-Net architecture counted 1,969 total terns.",
      location: "Lady Elliot Island, Bundaberg",
      model: "U-Net semantic segmentation",
      totalCount: 1969,
      primaryImage: "/tern_project/ternLabel2.png",
      gallery: [
        "/tern_project/crested_tern_unlabelled.png",
        "/tern_project/crested_tern.png",
        "/tern_project/ternUnlabeled2.png",
        "/tern_project/Screenshot from 2026-03-05 18-31-29.png",
        "/tern_project/Screenshot from 2026-03-05 18-32-06.png",
        "/tern_project/Screenshot from 2026-03-05 18-37-30.png",
        "/tern_project/Screenshot from 2026-03-05 18-37-39.png",
        "/tern_project/Screenshot from 2026-03-05 18-38-26.png",
        "/tern_project/Screenshot from 2026-03-05 18-38-37.png",
      ],
      artifacts: [
        {
          label: "Count Summary",
          path: "/tern_project/NumberOfTerns",
        },
      ],
    },
  ],
};

//const repos = {
//  show: true,
//  heading: "Recent Projects",
//  gitHubUsername: "lucitemple", //i.e."johnDoe12Gh"
//  reposLength: 0,
//  specificRepos: ["jamming", "ravenous", "task-planner", "tv-directory", "react-challenge-start", "JavaScript30" ],
//};

// Leadership SECTION
const leadership = {
  show: false
};
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
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
    { name: "Creativity", value: 65 },
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
    "I am looking for contracts at the intersection of drone imaging, data science, and AI. If you have a project in mind, questions, or just want to talk methodology, please feel free to email me at",
  email: "russell@aerialvisionscience.com.au",
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

export { navBar, mainBody, about, repos, leadership, getInTouch, experiences, skills };
