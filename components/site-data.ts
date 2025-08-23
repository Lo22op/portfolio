// ملف داتا مركزي لكل الموقع
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaSass, FaBookOpen, FaSyncAlt, FaCheckCircle } from "react-icons/fa";
import { SiJavascript, SiRedux, SiTailwindcss, SiVite, SiTypescript, SiPostman, SiAxios, SiReactrouter, SiJest } from "react-icons/si";
import { MdPsychology, MdUpcoming } from "react-icons/md";

export const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vite", icon: SiVite },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Problem Solving", icon: MdPsychology },
  { name: "Sass", icon: FaSass },
  { name: "Postman", icon: SiPostman },
  { name: "Axios", icon: SiAxios },
  { name: "React Router", icon: SiReactrouter },
  { name: "Jest", icon: SiJest },
];

export const projects = [
  {
    title: "E-commerce React App",
    description: "Full-featured shopping experience with cart management and responsive design",
    tech: ["React", "Redux Toolkit", "React Router", "Vite", "Tailwind CSS", "Axios"],
    type: "E-commerce",
    link: "https://e-commerce-nine-bay-51.vercel.app/",
  },
  {
    title: "Microservices-JS",
    description: "This is a JavaScript-based Microservices-style Web Project containing multiple independent modules ",
    tech: ["Git", "Tailwind", "JavaScript"],
    type: "System",
    link: "https://lo22op.github.io/Microservices-JS/",
  },
  {
    title: "JavaScript Slider",
    description: "Interactive slider with touch support and accessibility",
    tech: ["JavaScript", "DOM", "CSS"],
    type: "Interactive",
    link: "https://lo22op.github.io/Slider/",
  },
  {
    title: "vitalenta | Next Web Apps",
    description: "blog built with Next.js and Tailwind CSS",
    tech: ["Next.js", "Tailwind", "Lazy"],
    type: "Web App",
    link: "https://vitalenta-phi.vercel.app/",
  },
  {
    title: "First | Personal Creative Website",
    description: "blog built with Html and Tailwind CSS",
    tech: ["HTML", "Tailwind CSS", "Responsive"],
    type: "Web App",
    link: "https://lo22op.github.io/First/",
  },
  {
    title: "Meal | Personal Creative Website",
    description: "blog built with Html and Tailwind CSS",
    tech: ["HTML", "Tailwind CSS", "Responsive"],
    type: "Web App",
    link: "https://lo22op.github.io/Meal/",
  },
];

export const learning = [
  {
    title: "Data Structures js",  
    status: "Current",
    duration: "2 weeks",
    icon: FaBookOpen,
  },
  {
    title: "Web Design Patterns",
    status: "Current",
    duration: "4 weeks",
    icon: FaBookOpen,
  },
  {
    title: "Next.js ",
    status: "Upcoming",
    duration: "4 weeks",
    icon: FaBookOpen,
  },
  {
    title: "API and Networks",
    status: "Upcoming",
    duration: "4 weeks",
    icon: FaBookOpen,
  },
];

export const review = [
  {
    title: "JavaScript ES6+",
    status: "Current",
    duration: "Daily review",
    icon: FaSyncAlt,
  },
  {
    title: "React.Js",
    status: "Current",
    duration: "Weekly review",
    icon: FaSyncAlt,
  },
  {
    title: "HTML | Css",
    status: "Completed",
    duration: "Completed",
    icon: FaCheckCircle,
  },
  {
    title: "Git & GitHub",
    status: "Upcoming",
    duration: "Monthly review",
    icon: MdUpcoming,
  },
];

export const problemSolvingSteps = [
  {
    icon: "🔍",
    title: "Identify Problem",
    color: "red",
    description: "Analyze what's really broken and why it matters to users"
  },
  {
    icon: "⚡",
    title: "Design Solution",
    color: "blue",
    description: "Choose the right tools and approach for maximum impact"
  },
  {
    icon: "📈",
    title: "Measure Results",
    color: "green",
    description: "Track improvements and deliver measurable value"
  }
];

export const contactSectionData = {
  title: "Have a Project in Mind?",
  description: "I'm looking for new opportunities in frontend development. Let's talk about your next project!",
  button: {
    text: "Send Message",
    link: "https://wa.me/201225260935?text=Hi,%20I%20have%20a%20project%20in%20mind%20and%20want%20to%20discuss%20it%20with%20you."
  }
};
