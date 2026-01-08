import ecommerce1 from './assets/projects/ecommerce-1.png';
import ecommerce2 from './assets/projects/ecommerce-2.png';
import ecommerce3 from './assets/projects/ecommerce-3.png';
import ecommerce4 from './assets/projects/ecommerce-4.png';
import ecommerce5 from './assets/projects/ecommerce-5.png';
import resumeFile from './assets/RESUME-BANSHI.pdf';

import bus1 from './assets/projects/bus-1.png';
import bus2 from './assets/projects/bus-2.png';
import bus3 from './assets/projects/bus-3.png';
import bus4 from './assets/projects/bus-4.png';
import bus5 from './assets/projects/bus-5.png';
import bus6 from './assets/projects/bus-6.png';
import bus7 from './assets/projects/bus-7.png';
import care1 from './assets/projects/care-1.png';
import care2 from './assets/projects/care-2.png';
import care3 from './assets/projects/care-3.png';
import care4 from './assets/projects/care-4.png';
import care5 from './assets/projects/care-5.png';
import care6 from './assets/projects/care-6.png';
import care7 from './assets/projects/care-7.png';
import care8 from './assets/projects/care-8.png';
import care9 from './assets/projects/care-9.png';

export const personalInfo = {
    name: "AGHERA BANSHI",
    title: "Flutter & Web Developer | Computer Engineering Student",
    typingEffectSource: "https://readme-typing-svg.demolab.com/?lines=Flutter+Developer;B2C+App+Developer;Web+Developer&center=true&width=420&height=40",
    about: [
        "I am a passionate Computer Engineering student and Full Stack Developer with specialized expertise in Flutter mobile development and modern web technologies. My journey involves building scalable, user-centric solutions—from live B2C applications to smart management systems.",
        "With a strong command of Dart, PHP, JavaScript, and SQL, I focus on writing clean, efficient code that solves real-world problems. My experience includes delivering production-grade apps like the 'Care Ceramic' B2C platform and innovative tools like the QR-based Bus Attendance System.",
        "I am always eager to learn new technologies and take on challenging projects. Currently seeking internship or full-time opportunities to contribute my skills to a dynamic development team."
    ],
    connect: {
        github: "https://github.com/bansuaghera",
        linkedin: "https://in.linkedin.com/in/aghera-bansi-84b5b1351",
        email: "agherabansi2@gmail.com"
    },
    stats: {
        experience: "3 Months",
        projects: "3 Projects",
        clients: "2+"
    },
    resume: resumeFile
};

export const skills = {
    mobile: ["Flutter", "Dart", "Firebase"],
    web: ["PHP", "HTML", "CSS", "JavaScript", "Tailwind"],
    languages: ["Java", "Python"],
    database: ["MySQL"],
    tools: ["Git", "GitHub", "Postman", "VS Code"]
};

export const projects = [
    {
        id: 1,
        title: "Care Ceramic – B2C Mobile App (Live)",
        tech: "Flutter + Firebase",
        features: "Cart, Orders, Wishlist, PDF Catalog",
        description: "Ceramic B2C app with Automatic Stock Management, Dynamic filtering, Dynamic UI Admin and User panel. Features secure user login and automatic session handling.",
        gallery: [
            { src: care1, caption: "Home & Product Categories" },
            { src: care2, caption: "Product Listing (Table Top)" },
            { src: care3, caption: "Product Details & Enquiry" },
            { src: care4, caption: "User & Admin Action Dashboard" },
            { src: care5, caption: "Admin Stock & Manage Products" },
            { src: care6, caption: "Cart Management" },
            { src: care7, caption: "Order Details & Status Update" },
            { src: care8, caption: "Create New User" },
            { src: care9, caption: "Add Product Form" }
        ],
        github: "https://github.com/bansuaghera"
    },
    {
        id: 2,
        title: "QR-Based Bus Attendance System",
        tech: "Flutter + Firebase",
        features: "🥈 Runner-Up – TechFusion 2025",
        description: "Smart attendance system using QR codes. Click to view screenings.",
        gallery: [
            { src: bus1, caption: "Login Screen" },
            { src: bus2, caption: "Digital Bus Pass" },
            { src: bus3, caption: "Contact Support" },
            { src: bus4, caption: "QR Scanner" },
            { src: bus5, caption: "Attendance Dashboard" },
            { src: bus6, caption: "Admin Portal" },
            { src: bus7, caption: "Manage Students" }
        ],
        github: "https://github.com/bansuaghera"
    },



    {
        id: 3,
        title: "E-Commerce Website",
        tech: "PHP + Tailwind",
        features: "Auth, Cart, Admin Panel",
        description: "Full-stack e-commerce solution. Click to view screenshots.",
        gallery: [
            { src: ecommerce1, caption: "Home Page" },
            { src: ecommerce2, caption: "Auth Pages" },
            { src: ecommerce3, caption: "Featured Products" },
            { src: ecommerce4, caption: "Orders & Favorites" },
            { src: ecommerce5, caption: "Admin Dashboard" }
        ],
        github: "https://github.com/bansuaghera"
    }

];

export const experience = [
    {
        role: "Data Science & ML Intern",
        company: "Brainy Beam Technologies, Ahmedabad",
        tech: "Pandas, NumPy, Scikit-learn",
        description: "Worked with real-world datasets and machine learning models."
    }
];

export const certifications = [
    {
        id: 1,
        title: "AI Tools Workshop",
        issuer: "United Latino Students Association",
        date: "May 2025",
        credentialId: "ID: 46"
    },
    {
        id: 2,
        title: "The Fundamentals of Digital Marketing",
        issuer: "Google Digital Garage",
        date: "Apr 2023",
        credentialId: "ID: W3Q BEV 4JM",
        skills: "SEO, SEM, Social Media Marketing"
    },
    {
        id: 3,
        title: "Great Learning Certification",
        issuer: "Great Learning",
        date: "Mar 2023"
    },
    {
        id: 4,
        title: "Web Development (Laravel)",
        issuer: "RK University",
        date: "Mar 2025",
        skills: "Laravel, Web Designing"
    }
];

export const achievements = [
    {
        id: 1,
        title: "Runner Up - Mobile App Development",
        description: "Secured 2nd position in University Level Mobile Application Development competition using Flutter.",
        icon: "🏆"
    }
];

export const education = [
    {
        id: 1,
        degree: "B.Tech in Computer Engineering",
        institution: "RK University",
        year: "Pursuing",
        description: "Currently pursuing Bachelor of Technology."
    },
    {
        id: 2,
        degree: "Diploma in Information Technology",
        institution: "L.E. College (Diploma), Morbi",
        year: "Completed",
        description: "Completed Diploma Information Technology."
    },
    {
        id: 3,
        degree: "SSC",
        institution: "Gyanjyot Vidhyalay",
        year: "Completed",
        description: "Secondary School."
    }
];
