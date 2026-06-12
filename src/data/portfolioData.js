import ConfidFaceImage from "../assets/Confidface_img.png";
import SareeBazarImage from "../assets/community_ui.jpg";
import SaveBiteImage from "../assets/SaveBite_WebApp_Img.png";
import SQLProjImage from "../assets/SQL_Proj_Img.png";
import BIDataInsightImg from "../assets/BI_Data Insight_Img.png";
import ExcelProjImg from "../assets/Excel_Proj_img.png";
import {
  Code,
  BarChart3,
  Search,
  Bot,
  Database,
  Globe,
  Wrench,
  BadgeCheck,
  LineChart,
  Cpu,
  Monitor,
} from "lucide-react";

export const personal = {
  name: "Ahmed Haseen",
  title: "Data Analyst | Aspiring Data Scientist | SE Undergraduate",
  email: "mh.ahmedhaseen.ai@gmail.com",
  phone: "+94767502206",
  location: "Sri Lanka",
  linkedin: "https://www.linkedin.com/in/ahmed-haseen/",
  github: "https://github.com/ahmedhaseen",
  summary: (
    <>
      <a
        href="https://www.sab.ac.lk/computing/departments/dse-about"
        target="_blank"
        rel="noreferrer"
        className="font-medium text-gray-900 dark:text-white hover:text-sky-400 transition-colors"
      >
        Software Engineering Undergraduate
      </a>{" "}
      at the{" "}
      <a
        href="https://www.sab.ac.lk/computing/"
        target="_blank"
        rel="noreferrer"
        className="font-medium text-gray-900 dark:text-white hover:text-sky-400 transition-colors"
      >
        Faculty of Computing
      </a>
      ,{" "}
      <a
        href="https://www.sab.ac.lk/"
        target="_blank"
        rel="noreferrer"
        className="font-medium text-gray-900 dark:text-white hover:text-sky-400 transition-colors"
      >
        Sabaragamuwa University of Sri Lanka
      </a>{" "}
      (GPA: 3.64/4.00) with a strong interest in Data Analytics, Data Science,
      and AI-driven solutions. Skilled in Python, SQL, Excel, and Power BI, with
      hands-on experience in analytics, business-focused problem solving, and
      full-stack software development. Currently expanding expertise in machine
      learning and modern data technologies through practical projects.
    </>
  ),
};

export const stats = [
  { num: "3.64", label: "GPA / 4.00", target: "education" },
  { num: "5+", label: "Projects Built", target: "projects" },
  { num: "4+", label: "CERTIFICATIONS", target: "experience" },
  { num: "2+", label: "Years Volunteering", target: "experience" },
];

export const skills = [
  {
    icon: <Code size={20} />,
    title: "Programming",
    tags: ["Python", "Java", "JavaScript"],
  },
  {
    icon: <BarChart3 size={20} />,
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
    icon: <Search size={20} />,
    title: "Data Analytics Techniques",
    tags: [
      "Data Cleaning",
      "EDA",
      "Feature Engineering",
      "Descriptive Statistics",
      "Web Scraping",
    ],
  },
  {
    icon: <Bot size={20} />,
    title: "Machine Learning & AI Workflow Automation",
    tags: [
      "Scikit-learn",
      "Logistic Regression",
      "Random Forest",
      "Model Evaluation",
      "n8n Automation",
    ],
  },
  {
    icon: <Database size={20} />,
    title: "Databases",
    tags: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: <Globe size={20} />,
    title: "Web Technologies",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Next.js",
      "HTML/CSS",
      "Tailwind CSS",
    ],
  },
  {
    icon: <Wrench size={20} />,
    title: "Tools & Platforms",
    tags: [
      "Microsoft Azure",
      "GIt",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Figma",
    ],
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
    status: "Ongoing",
    category: "data",
    desc: (
      <>
        <strong>Ongoing telecom churn analysis project</strong> covering{" "}
        <strong>ETL</strong>, interactive dashboards, and{" "}
        <strong>ML-based prediction</strong>. Built <strong>SQL</strong> Server
        pipelines with staging tables and optimized views, developed{" "}
        <strong>power bi </strong>
        dashboards with <strong>DAX</strong> measures and custom tooltips, and
        implemented a<strong> Random Forest classifier</strong> in Python to
        identify high-risk customers and support retention strategies.
      </>
    ),
    image: null,
    tech: [
      "SQL",
      "Power BI",
      "Python",
      "Scikit-learn",
      "Pandas",
      "Jupyter Notebook",
    ],
    github: "https://github.com/ahmedhaseen",
    demo: "https://github.com/ahmedhaseen",
    featured: true,
  },
  {
    title: "Saree Bazar – E-Commerce Web System",
    status: "Ongoing",
    category: "web",
    desc: "A full-featured e-commerce platform for a retail saree shop in Badulla, Sri Lanka, built as a university community project. Features product browsing with categorization, shopping cart, secure payments, order tracking, wishlist, customer reviews, and an admin dashboard. Includes an optional AI-based virtual try-on module for personalized saree recommendations.",
    image: SareeBazarImage,
    tech: ["Next.js", "React", "Flask", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/kaveenskn/SareeBazar",
    demo: "",
    featured: false,
  },
  {
    title: "ConfidFace – AI Mock Interview App",
    status: "Completed",
    category: "web",
    desc: "A web-based AI-powered mock interview application for students and job seekers. Features an AI-generated interviewer video that plays when asking questions and pauses while the candidate responds — simulating a real interview experience. Generates role-specific questions from resumes or job descriptions, and delivers automated feedback with performance ratings.",
    image: ConfidFaceImage,
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "n8n",
      "Google Gemini API",
      "Clerk",
      "Convex",
      "ArcJet",
    ],
    github: "https://github.com/AhmedHaseen/ConfidFace-Web-App",
    demo: "https://canva.link/4qq04ozyjoox918",
    featured: true,
  },
  {
    title: "Data Careers: Trends & Insights Dashboard",
    status: "Completed",
    category: "data",
    desc: (
      <>
        Power BI dashboard built on 630+ survey responses from global data
        professionals. Used <strong>Power Query</strong> for data preparation,
        <strong>DAX</strong> for core <strong>KPIs</strong>, and interactive
        <strong>slicers</strong> to explore salary, role, and satisfaction
        trends.
      </>
    ),
    image: BIDataInsightImg,
    tech: ["Power BI", "Power Query", "DAX", "Data Visualization", "EDA"],
    github: "https://github.com/AhmedHaseen/data-careers-powerbi-dashboard",
    demo: "https://canva.link/7va6fzlmowfbwk0",
    featured: false,
  },
  {
    title: "SQL Data Cleaning & EDA — Global Layoffs",
    status: "Completed",
    category: "data",
    desc: (
      <>
        SQL-based <strong>data cleaning</strong> and{" "}
        <strong>exploratory data analysis</strong> on a global layoffs dataset.
        Cleaned missing and duplicate records, standardized fields, and used
        CTEs, window functions, and ranking to reveal layoff trends by industry,
        company, and time period.
      </>
    ),
    image: SQLProjImage,
    tech: ["MySQL", "CTEs", "Window Functions", "EDA"],
    github: "https://github.com/AhmedHaseen/mysql-portfolio-project",
    demo: "https://canva.link/gzrknrp4i7jz4ty",
    featured: false,
  },
  {
    title: "SaveBite – Food Redistribution Platform",
    status: "Completed",
    category: "web",
    desc: "Full-stack MERN platform connecting restaurants and NGOs to minimise food waste. Includes real-time availability tracking, request management, and impact analytics.",
    image: SaveBiteImage,
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/AhmedHaseen/SE4106-Web-Project",
    demo: "https://www.linkedin.com/posts/ahmed-haseen_savebite-foodredistribution-webdevelopment-ugcPost-7363950554529554433-zoN6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF3BwpsBbkrPoPKR0OLGe6P4YxDGOWb-YjY",
    featured: false,
  },
  {
    title: "Bike Sales Analysis Dashboard",
    status: "Completed",
    category: "data",
    desc: (
      <>
        <strong>Excel dashboard analyzing</strong> bike sales by customer
        demographics. Cleaned duplicates and standardized data, engineered age
        groups with IF functions, built <strong>Pivot Tables</strong> for income
        and occupation analysis, and implemented dynamic filtering with
        <strong>slicers</strong> for interactive insights.
      </>
    ),
    image: ExcelProjImg,
    tech: [
      "Microsoft Excel",
      "Pivot Tables",
      "Data Cleaning",
      "Feature Engineering",
      "Data Visualization",
    ],
    github: "https://github.com/AhmedHaseen/Excel-Bike-Sales-Analysis",
    demo: "https://canva.link/rpr1eqgjqf53zwi",
    featured: false,
  },
];

export const experience = [
  {
    date: "2023 – Present",
    title: "Media Team Member (Graphic Designer)",
    org: "Muslim Majlis, Sabaragamuwa University of Sri Lanka",
    orgUrl: "https://www.facebook.com/share/1BAF9GATPY/",
    desc: "Design religious posters, weekly reflections, and digital publications for official social media. Plan and execute cultural and awareness events.",
  },
  {
    date: "2022 – Present",
    title: "Taekwondo Coach",
    org: "Kalmunai Taekwondo Sports Academy",
    orgUrl: "https://www.facebook.com/share/1CvTvFzeJv/",
    desc: "Provide coaching sessions for young athletes focusing on technical skills, discipline, and self-confidence. Promote teamwork and sportsmanship.",
  },
];

export const certifications = [
  {
    name: "What is Data Science?",
    issuer: "Coursera · IBM",
    icon: <BadgeCheck size={18} />,
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/LWTSVVZYG6BJ",
  },
  {
    name: "Fast-Track Data Analysis and Presentations",
    issuer: "Coursera · Google",
    icon: <LineChart size={18} />,
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/8KAFLK42A0WL",
  },
  {
    name: "Speed Up Data Analysis and Presentation Building",
    issuer: "Coursera · Google",
    icon: <Cpu size={18} />,
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/US76CNCNL1EP",
  },
  {
    name: "Marketing Analytics: Data Predictions and Dashboards",
    issuer: "Coursera",
    icon: <BarChart3 size={18} />,
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/5BLX66SSH4UP",
  },
  {
    name: "Introduction to Front-End Development",
    issuer: "Meta · Coursera",
    icon: <Monitor size={18} />,
    verifyUrl: "https://example.com/certifications/front-end-development",
  },
];

export const education = [
  {
    year: "2023–2027",
    degree: "BSc (Hons) in Software Engineering",
    inst: "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
    detail: "Current GPA: 3.64 / 4.00",
    detailUrl:
      "https://drive.google.com/file/d/1xwJB1mM-XtORi-E83BFlLtx8XphGP_E4/view?usp=sharing",
  },
  {
    year: "2019–2021",
    degree: "G.C.E. Advanced Level – Physical Science",
    inst: "Zahira National College, Kalmunai",
    detail: (
      <>
        <span className="block sm:inline">Z-Score: 1.3867</span>
        <span className="hidden sm:inline"> · </span>
        <span className="block sm:inline">
          Combined Maths: B · Chemistry: B · Physics: C
        </span>
      </>
    ),
    detailUrl:
      "https://drive.google.com/file/d/1B1szygwocF7O0vxA6kIZp2BOgU0hmVWa/view?usp=sharing",
  },
  {
    year: "2018",
    degree: "G.C.E. Ordinary Level",
    inst: "Zahira National College, Kalmunai",
    detail: "9 A's in all subjects",
    detailUrl:
      "https://drive.google.com/file/d/1_Ia5ElAhTCtIL2CShK8nWZedJR_m1Whd/view?usp=sharing",
  },
];

export const achievements = [
  {
    emoji: "🥉",
    title: "Bronze Medalist – Taekwondo",
    sub: "SLUG 2025 · Sabaragamuwa University",
    titleUrl:
      "https://drive.google.com/file/d/1Q8ZWZYJ7kej8gEX-DtWBQi3jrF8vKkxT/view?usp=sharing",
  },
  {
    emoji: "🥋",
    title: "Black Belt – 2nd Dan (Nidan) Karate",
    sub: "Sri Lanka Karate Federation (SLKF)",
    titleUrl:
      "https://drive.google.com/file/d/1hdvGJfIfduY_Hasec2It87CCaqM0WJUw/view?usp=sharing",
  },
  {
    emoji: "🏆",
    title: "Champion – Karate Team Kata",
    sub: "Eastern Province School Meet 2019",
    titleUrl:
      "https://drive.google.com/file/d/1wYlCjsMNNVffhCXqvrOAL1nehckgHYpl/view?usp=sharing",
  },
  {
    emoji: "🎓",
    title: "9 A's at O/Level",
    sub: "Zahira National College 2018",
    titleUrl:
      "https://drive.google.com/file/d/1_Ia5ElAhTCtIL2CShK8nWZedJR_m1Whd/view?usp=sharing",
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
