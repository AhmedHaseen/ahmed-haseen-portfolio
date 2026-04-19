import ConfidFaceImage from "../assets/Confidface_img.png";
import SaveBiteImage from "../assets/SaveBite_WebApp_Img.png";

export const personal = {
  name: "Ahmed Haseen",
  title: "Data Analyst | Aspiring Data Scientist",
  email: "haseen2002hsn@gmail.com",
  phone: "+94704934696",
  location: "Sri Lanka",
  linkedin: "https://linkedin.com/in/ahmedhaseen",
  github: "https://github.com/ahmedhaseen",
  summary:
    "Motivated Data Analyst and aspiring Data Scientist pursuing a BSc (Hons) in Software Engineering at Sabaragamuwa University (GPA 3.73/4.00). Skilled in turning data into actionable insights using Python, SQL, and Power BI, with growing expertise in machine learning and AI-driven automation.",
};

export const stats = [
  { num: "3.73", label: "GPA / 4.00" },
  { num: "5+", label: "Projects Built" },
  { num: "4+", label: "CERTIFICATIONS" },
  { num: "2+", label: "Years Volunteering" },
];

export const skills = [
  {
    icon: "🐍",
    title: "Programming",
    tags: ["Python", "Java", "JavaScript"],
  },
  {
    icon: "📊",
    title: "Data Analysis & Visualization",
    tags: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Tableau",
      "Excel",
    ],
  },
  {
    icon: "🤖",
    title: "Machine Learning",
    tags: [
      "Scikit-learn",
      "Logistic Regression",
      "Random Forest",
      "EDA",
      "n8n Automation",
    ],
  },
  {
    icon: "🗄️",
    title: "Databases",
    tags: ["MySQL", "MongoDB"],
  },
  {
    icon: "🌐",
    title: "Web Technologies",
    tags: ["React.js", "Node.js", "Express.js", "HTML/CSS", "Tailwind CSS"],
  },
  {
    icon: "☁️",
    title: "Cloud & Tools",
    tags: ["Microsoft Azure", "GitHub", "VS Code", "Figma", "Canva"],
  },
];

export const proficiency = [
  { label: "Python (Pandas, NumPy)", pct: 90 },
  { label: "Data Visualization / Power BI", pct: 88 },
  { label: "SQL / MySQL / MongoDB", pct: 82 },
  { label: "Machine Learning (Scikit-learn)", pct: 75 },
  { label: "React.js / Node.js", pct: 70 },
  { label: "Microsoft Azure / Cloud", pct: 60 },
];

export const projects = [
  {
    title: "Customer Churn Prediction",
    status: "Completed",
    category: "data",
    desc: "Binary classification model predicting customer churn using Logistic Regression and Random Forest. Performed EDA, feature engineering, and precision-recall analysis to identify at-risk customers and support retention strategies.",
    image: null,
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/ahmedhaseen",
    demo: null,
    featured: true,
  },
  {
    title: "ConfidFace – AI Mock Interview App",
    status: "Completed",
    category: "web",
    desc: "AI-driven mock interview simulator leveraging Agentic AI through n8n workflow automation. Delivers real-time analytics with personalised feedback on communication, confidence, and engagement.",
    image: ConfidFaceImage,
    tech: ["n8n", "Agentic AI", "Real-time Analytics", "Data Visualization"],
    github: "https://github.com/ahmedhaseen",
    demo: null,
    featured: true,
  },
  {
    title: "Retail Sales Data Dashboard",
    status: "Completed",
    category: "data",
    desc: "Interactive Power BI dashboard analysing regional sales performance, profitability, and customer segments. Cleaned and transformed datasets using Python for accurate reporting and trend monitoring.",
    image: null,
    tech: ["Power BI", "Python", "Pandas", "NumPy", "DAX"],
    github: "https://github.com/ahmedhaseen",
    demo: null,
    featured: false,
  },
  {
    title: "E-Commerce Product Insights",
    status: "Completed",
    category: "data",
    desc: "Analysed e-commerce sales data using Python, Pandas, and MySQL to identify product demand and pricing trends. Built a Power BI dashboard for marketing and inventory decisions.",
    image: null,
    tech: ["Python", "Pandas", "MySQL", "Power BI"],
    github: "https://github.com/ahmedhaseen",
    demo: null,
    featured: false,
  },
  {
    title: "SaveBite – Food Redistribution Platform",
    status: "Completed",
    category: "web",
    desc: "Full-stack MERN platform connecting restaurants and NGOs to minimise food waste. Includes real-time availability tracking, request management, and impact analytics.",
    image: SaveBiteImage,
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/ahmedhaseen",
    demo: "https://github.com/ahmedhaseen",
    featured: false,
  },
];

export const experience = [
  {
    date: "2023 – Present",
    title: "Media Team Member (Graphic Designer)",
    org: "Muslim Majlis, Sabaragamuwa University of Sri Lanka",
    desc: "Design religious posters, weekly reflections, and digital publications for official social media. Plan and execute cultural and awareness events.",
  },
  {
    date: "2022 – Present",
    title: "Taekwondo Coach",
    org: "Kalmunai Taekwondo Sports Academy",
    desc: "Provide coaching sessions for young athletes focusing on technical skills, discipline, and self-confidence. Promote teamwork and sportsmanship.",
  },
];

export const certifications = [
  { name: "Data Analysis with Python", issuer: "IBM · Coursera", icon: "🔬" },
  {
    name: "Data Visualization with Python",
    issuer: "IBM · Coursera",
    icon: "📈",
  },
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM · Coursera",
    icon: "🤖",
  },
  {
    name: "Introduction to Front-End Development",
    issuer: "Meta · Coursera",
    icon: "💻",
  },
];

export const education = [
  {
    year: "2023–2027",
    degree: "BSc (Hons) in Software Engineering",
    inst: "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
    detail: "Current GPA: 3.73 / 4.00",
  },
  {
    year: "2019–2021",
    degree: "G.C.E. Advanced Level – Physical Science",
    inst: "Zahira National College, Kalmunai",
    detail: "Z-Score: 1.3867 · Combined Math: B · Chemistry: B · Physics: C",
  },
  {
    year: "2018",
    degree: "G.C.E. Ordinary Level",
    inst: "Zahira National College, Kalmunai",
    detail: "9 A's in all subjects",
  },
];

export const achievements = [
  {
    emoji: "🥉",
    title: "Bronze Medalist – Taekwondo",
    sub: "SLUG 2025 · Sabaragamuwa University",
  },
  {
    emoji: "🥋",
    title: "Black Belt – 2nd Dan (Nidan) Karate",
    sub: "Sri Lanka Karate Federation (SLKF)",
  },
  {
    emoji: "🏆",
    title: "Champion – Karate Team Kata",
    sub: "Eastern Province School Meet 2019",
  },
  {
    emoji: "🎓",
    title: "9 A's at O/Level",
    sub: "Zahira National College 2018",
  },
];

export const softSkills = [
  "Leadership",
  "Communication",
  "Team Collaboration",
  "Analytical Thinking",
  "Adaptability",
  "Time Management",
];

export const languages = [
  { lang: "English", level: "Professional Working Proficiency" },
  { lang: "Tamil", level: "Native" },
  { lang: "Sinhala", level: "Intermediate" },
];
