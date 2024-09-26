import hotel from '../assets/hotel.avif'
import expense from '../assets/expense.avif'

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications .I have honed my skills in front-end technologies like HTML ,CSS and React as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = ` I am a dedicated and enthusiastic
 electrical and electronics engineer. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
    company: "Google Inc.",
    description: ` B.E - Electrical And Electronics Engineering`,
    technologies: ["CGPA: 8.12"],
  },
  {
    year: "2020 - 2021",
    role: "VELAMMAL MATRICULATION HIGHER SECONDARY SCHOOL",
    company: "Adobe",
    description: `HSC - Higher Secondary Certificate`,
    technologies: ["PERCENTAGE: 88.78"],
  },
  {
    year: "2018 - 2019",
    role: "VELAMMAL VIDYALAYA ANUPPANADI",
    company: "Facebook",
    description: `CBSE - Central Board of Secondary Education`,
    technologies: ["CGPA : 8.04"],
  }
];

export const PROJECTS = [
  {
    title: "Airbnb Clone",
    image: hotel,
    description:
      "This is a full-stack Airbnb clone 🏠 built using modern web technologies to replicate the core functionality of Airbnb’s platform, including displaying property listings, image galleries, and detailed information about each place.",
    technologies: ["React", "Node.js", "MongoDB","Express Js"],
  },
  {
    title: "Expense Tracker",
    image: expense,
    description:
      "An Expense Tracker built with the MERN stack allows users to track and categorize their expenses in real-time. It features a MongoDB database, Express and Node.js for the backend, and a React front-end for a smooth, responsive user experience.",
    technologies: ["React", "Node.js", "MongoDB","Express Js"],
  }
];

export const CONTACT = {
  description: "Created by shafeeq ❤️ ",
  email: "shafeeqahmed.ee21@bitsathy.ac.in",
};