
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Vikash Kumar",
  title: "Hi all, I'm Vikash",
  subTitle: emoji("A passionate Software Developer 🚀I believe that a piece of code is mightier than a pen as well as sword. Programming and solving problems are my passion and that’s what I strive to practice as a career. I want to work in a challenging envi-ronment which encourage me to improve and learn new skills."),
  resumeLink: "https://drive.google.com/file/d/1jbh4R_Elv1F3SfoM0xkc85Gp4-qXZ5ay/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/vikas9905",
  linkedin: "https://www.linkedin.com/in/vikas9905/",
  gmail: "vikas6.7mishra@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100021853080567",
  Quora: "https://www.quora.com/profile/Vikash-Mishra-231",
  stackoverflow: "https://stackoverflow.com/users/11072550/vikash-mishra"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY technology enthusiast WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
   emoji("⚡ Datascience and Machine learning enthusiast build different Datascience projects"),
    emoji("⚡ Develop interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Payment Integration to websites and apps"),
    emoji("⚡ Integration of third party services such as AWS")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    
 
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Lakshmi narain college of technology,Bhopal",
      logo: require("./assets/images/lnctlogo.png"),
      subHeader: "B-TECH in INFORMATION TECHNOLOGY",
      duration: "JULY 2017 - JULY 2021",
      desc: "cumulative Acadmic score is 7.73 (first division Hons)",
    },
   
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Datascience/Machine learning",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Android App/Web App(frontend+Backend)",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern",
      company: "Tata consultancy services",
      companylogo: require("./assets/images/tata1.jpg"),
      date: "June 2020 – Oct 2020",
      desc: "Worked in data science and AI domain build sementic network to process Artificial intelligence",
      descBullets: [
         "Usage of Enterprise Graph technologies in Clinical management space.",
         "Implemention and adoption of various standards like CDISC, ADAM, SDTM to represent clinical data in graphical format, and deriving downstream use cases to leverage ontologies and dictionaries for ana-lytics and AI .",
        "Technology used Neo4j (graph database),cypher(Graph database que-ry language),web ontology language(OWL),Protégé(Ontology Editor)",
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "vikas9905", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "Worked on this Repo During my internship with TCS.Accelerating Biomedical Knowledge Discovery",
  projects: [
    {
      image: require("./assets/images/grakn1.png"),
      link: "https://github.com/graknlabs/biograkn"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Python Course",
      subtitle: "Got certificate for python course by google",
      image: require("./assets/images/google.jpg"),
      footerLink: [
        { name: "Certificate", url: "https://www.coursera.org/account/accomplishments/certificate/8QF8VLXKNLFH" },
        ]
    },
    {
      title: "IBM Data Science Certifcation",
      subtitle: "Got Data Science course certificate from IBM",
      image: require("./assets/images/IBM.png"),
      footerLink: [{ name: "Certificate", url: "https://www.coursera.org/account/accomplishments/certificate/NWZH4T7NW2VK" }]
    },

    {
      title: "Newton coding challenge",
      subtitle: "Competed and got 319 Rank out of 10000 participants",
      image: require("./assets/images/newton.png"),
      footerLink: [
        { name: "Certificate", url: "https://www.linkedin.com/in/vikas9905/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACzgwRABbCPmxHVWKPr0sa3La7-D8Fb6V0A,1604807255397)/" },
     
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "YouTube",
  subtitle: "Data structure and Algorithm youtube videos ",

  blogs: [
    {
      url: "#",
      title: "Get crystal clear your competative programming skills",
      description: "Follow the tutorial and you will be good at competative programming"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE  😅"),

  talks: [
    {
      title: "Checkout my Quora proffile",
      subtitle: "Learn and spread learning",
      slides_url: "https://www.quora.com/profile/Vikash-Mishra-231"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Video Resume 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["#Podcast"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+919142083460",
  email_address: "vikas6.7mishra@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "vikashm03747829"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
