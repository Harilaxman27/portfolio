import neaaaImg from "@/assets/Neaaa.png";
import vaccSafeImg from "@/assets/VaccSafe.png";
import eduVerseImg from "@/assets/Eduverse.png";
import urbanHeroImg from "@/assets/UrbanHero.png";
import docMindImg from "@/assets/DocMind.png";
import ecoFarmImg from "@/assets/EcoFarm.jpeg";

export const profile = {
  name: "Salendra Harilaxman",
  title: "Mobile developer and AI Engineer",
  email: "salendraharilaxman@gmail.com",
  phone: "9848743336",
  location: "Hyderabad, India",
  socials: {
    linkedin: "https://linkedin.com/in/salendraharilaxman",
    dribbble: "#",
    github: "https://github.com/Harilaxman27",
    google: "#",
    twitter: "https://x.com/Harilaxman_27",
  },
};

export const sections = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "gallery", label: "Gallery" },
  { id: "achievements", label: "Achievements" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const services = [
  { icon: "brain", title: "AI & Machine Learning", desc: "Building intelligent systems with supervised learning, deep learning, and computer vision for real-world problem solving." },
  { icon: "code", title: "Full Stack Development", desc: "End-to-end web applications using React.js, FastAPI, Firebase, and Supabase with clean architecture." },
  { icon: "smartphone", title: "Mobile Apps", desc: "Cross-platform mobile applications with Flutter and Dart, integrated with cloud backends and AI services." },
  { icon: "server", title: "Backend & DevOps", desc: "Scalable APIs with FastAPI & REST, containerised with Docker, and automated via GitHub Actions CI/CD pipelines." },
];

// Skills — slug matches simpleicons.org CDN slug
export const skills = [
  { name: "Python", slug: "python" },
  { name: "React", slug: "react" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Flutter", slug: "flutter" },
  { name: "Java", slug: "openjdk" },
  { name: "C", slug: "c" },
  { name: "MySQL", slug: "mysql" },
  { name: "Firebase", slug: "firebase" },
  { name: "Supabase", slug: "supabase" },
  { name: "Docker", slug: "docker" },
  { name: "GitHub Actions", slug: "githubactions" },
  { name: "TensorFlow", slug: "tensorflow" },
];

export const education = [
  {
    title: "CMR College of Engineering & Technology",
    desc: "B.Tech – CSE (AI & ML)",
    period: "2023 — Present",
  },
];

export const experience = [
  {
    title: "Apprenticeship",
    company: "DBS Tech",
    period: "8 Jun 2026 — 7 Jun 2027",
    location: "Hyderabad, India",
    bullets: [
      "Working as a Tech Apprentice at DBS Tech.",
    ],
  },
  {
    title: "Student Intern — Full Stack Developer · AI Engineer · App Development",
    company: "Hexart.in (by HEXAGON)",
    period: "Nov 2025 — Apr 2026",
    location: "India",
    bullets: [
      "Working on front-end development for the NEAAA food delivery application with custom feature integrations.",
      "Developing an ML-based image classification system for VaccSafe using real-world dog image data.",
    ],
  },
];

export const certifications = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "Stanford University via Coursera",
  },
];

export const projects = [
  {
    title: "NEAAA",
    desc: "A location-based food search platform with advanced discovery features. Implements heatmaps, inverted indexing, and sentiment analysis for food recommendations.",
    tech: "Flutter · Dart · Supabase · Firebase · FastAPI · Inverted Index · Sentiment Analysis",
    period: "Dec 2025 — Present",
    image: neaaaImg,
  },
  {
    title: "VaccSafe",
    desc: "An AI system to identify dog vaccination status using nose print images. Collected 3,000 dog images and annotated 500 for supervised model training.",
    tech: "Python · Roboflow · React.js · Firebase · Supabase · YOLOv8 · DINOv2",
    period: "Nov 2025 — Apr 2026",
    image: vaccSafeImg,
  },
  {
    title: "EduVerse",
    desc: "An AI-driven learning platform delivering personalised learning paths, adaptive quizzes, and interactive coding practice through a clean and intuitive web experience.",
    tech: "React.js · FastAPI · Firebase · TensorFlow",
    period: "2025",
    image: eduVerseImg,
  },
  {
    title: "UrbanHero",
    desc: "An intelligent waste reporting platform empowering citizens to report urban issues using AI-powered image analysis and real-time location tracking.",
    tech: "React.js · Python · Firebase · Computer Vision",
    period: "2025",
    image: urbanHeroImg,
  },
  {
    title: "DocMind",
    desc: "An offline-first healthcare web application designed to manage medical documents and essential health information reliably, even in low-connectivity environments.",
    tech: "React.js · Firebase · Service Workers",
    period: "2025",
    image: docMindImg,
  },
  {
    title: "Eco Farm AI",
    desc: "A Flutter-based smart farming app for Crop, Dairy, and Poultry Farmers. Integrates AI tools, Firebase services, and financial tracking to make farming smarter and data-driven.",
    tech: "Flutter · Firebase · TensorFlow · Dart",
    period: "2025",
    image: ecoFarmImg,
  },
];

export const blogPosts = [
  { title: "From Hackathon to Product", excerpt: "Lessons learned turning a 24-hour hackathon prototype into a production-ready application with real users.", date: "Mar 12, 2026" },
  { title: "Building AI Systems That Actually Work", excerpt: "Practical insights on bridging the gap between ML research papers and deployed, maintainable AI products.", date: "Feb 02, 2026" },
  { title: "Why I Chose FastAPI Over Flask", excerpt: "A hands-on comparison of Python backend frameworks — async performance, type safety, and developer experience.", date: "Dec 18, 2025" },
];
