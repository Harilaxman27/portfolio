export const profile = {
  name: "Aakash Rajbanshi",
  title: "AI Engineer & Full Stack Developer",
  email: "aakashrajbanshi58@gmail.com",
  location: "Kathmandu, Nepal",
  socials: {
    linkedin: "#",
    dribbble: "#",
    github: "#",
    google: "#",
    twitter: "#",
  },
};

export const sections = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "gallery", label: "Gallery" },
  { id: "achievements", label: "Achievements" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const services = [
  { icon: "smartphone", title: "Mobile Apps", desc: "Professional development of applications for Android and iOS." },
  { icon: "code", title: "Web Development", desc: "High-quality development of sites at the professional level." },
  { icon: "pen-tool", title: "UI/UX Design", desc: "The most modern and high-quality design made at a professional level." },
  { icon: "server", title: "Backend Development", desc: "High-performance backend services designed for scalability and seamless user experience." },
];

// Skills — slug matches simpleicons.org CDN slug
export const skills = [
  { name: "Python", slug: "python" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "Flutter", slug: "flutter" },
  { name: "React", slug: "react" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Firebase", slug: "firebase" },
  { name: "Supabase", slug: "supabase" },
  { name: "Docker", slug: "docker" },
  { name: "Git", slug: "git" },
  { name: "OpenCV", slug: "opencv" },
  { name: "MySQL", slug: "mysql" },
  { name: "Java", slug: "openjdk" },
  { name: "C", slug: "c" },
];

export const education = [
  {
    title: "Nihareeka College Of Management And Information Technology",
    desc: "Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)",
    period: "2017 — 2021",
  },
  {
    title: "Greenland International College",
    desc: "+2 Science",
    period: "2015 — 2017",
  },
];

export const experience = [
  {
    title: "Flutter Developer",
    company: "Self-employed",
    period: "2022 — Present",
    location: "Kathmandu, Nepal",
    bullets: [
      "Identified and resolved bugs, improving app stability and performance.",
      "Wrote clean, maintainable, and testable code following best practices.",
      "Utilization of latest version of support libraries to ensure backend compatibility.",
      "Integrated payment solution like eSewa, for secure and seamless transactions.",
      "Collaborated with backend developers, designers, and cross-functional teams to deliver scalable, high-quality solutions.",
      "Performed code review and deployed the app in Playstore and Appstore.",
    ],
  },
  {
    title: "Flutter Developer Intern",
    company: "YAJ Tech Pvt. Ltd",
    period: "May, 2022 — Sep, 2022 · 4 mo",
    location: "Kathmandu, Nepal",
    bullets: [
      "Assisted in developing and maintaining Flutter applications, ensuring seamless functionality and user-friendly interfaces.",
      "Supported the implementation of visually appealing UI designs that aligned with client requirements and design principles.",
      "Collaborated with cross-functional teams, including back-end developers and designers, to deliver efficient, high-quality, and scalable solutions.",
      "Gained hands-on experience in debugging, troubleshooting, and refining app features to improve user experience.",
    ],
  },
];

export const blogPosts = [
  { title: "Building Beautiful Flutter UIs", excerpt: "Tips and tricks for crafting polished mobile interfaces that feel native and responsive.", date: "Mar 12, 2026" },
  { title: "From Prototype to Production", excerpt: "How I ship reliable apps fast — from idea to the store, without cutting corners on quality.", date: "Feb 02, 2026" },
  { title: "Why I Switched to FastAPI", excerpt: "A practical look at FastAPI for modern backends, async by default, and great developer experience.", date: "Dec 18, 2025" },
];
