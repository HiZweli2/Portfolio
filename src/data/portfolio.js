export const projects = [
  {
    title: "Cloud Cost Optimization",
    role: "DevOps Engineer at Rentoza",
    description: "Architected and implemented comprehensive GCP cost optimization strategies across 48+ integrated platforms, delivering R500k in annual savings through intelligent resource allocation and workflow optimization.",
    tech: ["Google Cloud Platform", "BigQuery", "Cloud Run", "Cost Management"],
    impact: "R500k annual savings",
    color: "#2d5a7b",
    accent: "#4a9eff",
    links: []
  },
  {
    title: "BigQuery Data Pipeline Architecture",
    role: "DevOps Engineer at Rentoza",
    description: "Built production ETL pipelines bridging external vendor systems with internal analytics infrastructure. One key pipeline integrates a collections partner with our data warehouse—connecting to their SFTP server using Python and Paramiko, reading CSV files into memory with Pandas, applying schema transformations across 100+ fields with type coercion for dates, timestamps, booleans, and currency values. Cleaned data loads into Google BigQuery for collection performance reporting. The pipeline also works in reverse, pulling from Google Sheets and uploading to SFTP for partner consumption. Runs as a serverless Cloud Function triggered via HTTP with proper error handling, logging, and credential management.",
    tech: ["Python", "Pandas", "Paramiko", "BigQuery", "Cloud Functions", "SFTP", "Google Sheets API"],
    impact: "Production ETL bridging vendors & analytics",
    color: "#5a3d5c",
    accent: "#b68cd9",
    links: [
      { text: "View Pipeline Code", url: "https://github.com/HiZweli2/Data-pipeline-Bigquery-to-sftp-server" }
    ]
  },
  {
    title: "Shopify & Tapcart Mobile App",
    role: "DevOps Engineer at Rentoza",
    description: "Since joining Rentoza in July 2024, I've built and maintained a custom Shopify 2.0 theme using Tailwind CSS, Liquid, and Alpine.js with a modular architecture of reusable sections and components for flexible page building. Implemented product bundling, upsells, age verification, and newsletter popups. Led the Rentoza mobile app development using Tapcart, designing core screens and flows including Home, Categories, Product Detail, Account dashboard, and auth journeys. Delivered the Black Friday update on time with performance optimizations like lazy loading and priority content loading for peak traffic handling.",
    tech: ["Shopify", "Tailwind CSS", "Liquid", "Alpine.js", "Tapcart", "React"],
    impact: "Full e-commerce platform & mobile app",
    color: "#2d5a4f",
    accent: "#5fbfa7",
    links: [
      { text: "Rentoza Website", url: "https://rentoza.co.za/" },
      { text: "Rentoza App", url: "https://play.google.com/store/search?q=rentoza&c=apps&hl=en_ZA" }
    ]
  },
  {
    title: "Mhondoro Capital Website",
    role: "Frontend Development",
    description: "Developed a modern React-based website for Mhondoro Capital with responsive design, smooth animations, and professional corporate aesthetics.",
    tech: ["React", "JavaScript", "Responsive Design", "CSS"],
    impact: "Professional web presence",
    color: "#6b4423",
    accent: "#d4915e",
    links: [
      { text: "View Live Site", url: "https://www.mhondorocap.com/" }
    ]
  },
  {
    title: "Microservices & Bishop App",
    role: "Developer at RapidTrade",
    description: "Maintained Golang-based microservices with focus on performance, scalability, and clean architecture patterns.I addition I also contributed to feature development and ongoing maintenance of the RapidTrade Bishop app, a React-based sales and sync platform.",
    tech: ["Golang", "React", "Microservices", "Docker", "APIs","AWS"],
    impact: "High-performance systems",
    color: "#4a3a5a",
    accent: "#9d7fb8",
    links: [
      { text: "Bishop App", url: "https://sasko.rapidtrade.com/#/sync" }
    ]
  }
];

export const skills = {
  "Cloud & Infrastructure": [
    "Google Cloud Platform",
    "AWS",
    "Docker",
    "Cloud Run",
    "Artifact Registry"
  ],
  "Data Engineering": [
    "BigQuery",
    "SQL",
    "Data Pipelines",
    "ETL",
    "Analytics"
  ],
  "Backend Development": [
    "Python",
    "Golang",
    ".NET",
    "Node.js",
    "RESTful APIs"
  ],
  "Frontend Development": [
    "React",
    "JavaScript",
    "Shopify Liquid",
    "Responsive Design"
  ],
  "DevOps & Tools": [
    "CI/CD",
    "Git",
    "Cost Optimization",
    "Performance Tuning",
    "SFTP Integration"
  ]
};

export const contactLinks = [
  {
    text: 'letsgozweli@gmail.com',
    href: 'mailto:letsgozweli@gmail.com',
    color: '#4a9eff'
  },
  {
    text: '+27 81 793 5297',
    href: 'tel:+27817935297',
    color: '#d4915e'
  },
  {
    text: 'GitHub',
    href: 'https://github.com/HiZweli2',
    color: '#b68cd9'
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zweli-ndlela-1b2abb260/',
    color: '#5fbfa7'
  }
];

export const skillColors = ['#4a9eff', '#5fbfa7', '#b68cd9', '#d4915e', '#9d7fb8'];
