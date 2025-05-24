
export interface ProjectLanguage {
  name: string;
  percentage: number;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  languages: ProjectLanguage[];
  videoUrl?: string;
  clientName?: string;
  completionDate?: string;
  projectUrl?: string;
  features?: string[];
}

// Extended project data with more details
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Beauty Product - Ecommerce",
    category: "Mobile App",
    tags: ["Mobile", "E-commerce", "UI/UX"],
    image: "/images/beauty.png",
    description: "A comprehensive mobile e-commerce solution for beauty products with advanced filtering, wishlist functionality, and seamless checkout process. The app provides personalized recommendations based on user preferences and purchase history.",
    languages: [
      { name: "JavaScript", percentage: 45 },
      { name: "React Native", percentage: 30 },
      { name: "Python", percentage: 15 },
      { name: "CSS", percentage: 10 }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clientName: "Glow Beauty Inc.",
    completionDate: "2024-03-15",
    projectUrl: "https://example.com/beauty-app",
    features: [
      "User authentication and profiles",
      "Product browsing with advanced filters",
      "Wishlist and favorites",
      "Secure checkout process",
      "Order tracking",
      "Push notifications"
    ]
  },
  {
    id: 2,
    title: "Health & Wellness Platform",
    category: "Web Application",
    tags: ["Web", "Healthcare", "SaaS"],
    image: "/images/sports.png",
    description: "A comprehensive wellness platform connecting users with health professionals. Features include appointment booking, secure video consultations, health tracking, and personalized wellness plans tailored to individual needs.",
    languages: [
      { name: "TypeScript", percentage: 40 },
      { name: "React", percentage: 30 },
      { name: "Node.js", percentage: 20 },
      { name: "HTML/CSS", percentage: 10 }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clientName: "WellBeing Health",
    completionDate: "2024-01-20",
    projectUrl: "https://example.com/health-platform",
    features: [
      "User and practitioner profiles",
      "Appointment scheduling system",
      "Secure video consultations",
      "Health metrics tracking",
      "Personalized wellness plans",
      "Encrypted medical data storage"
    ]
  },
  {
    id: 3,
    title: "AI-Powered Travel Assistant",
    category: "Mobile App",
    tags: ["Mobile", "AI", "Travel"],
    image: "/images/travel.png",
    description: "An intelligent travel companion app that helps users plan trips, discover local attractions, and navigate unfamiliar destinations. The AI-powered assistant provides personalized recommendations based on user preferences and real-time conditions.",
    languages: [
      { name: "Python", percentage: 35 },
      { name: "Swift", percentage: 30 },
      { name: "JavaScript", percentage: 25 },
      { name: "Kotlin", percentage: 10 }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clientName: "Wanderlust Tech",
    completionDate: "2023-11-10",
    features: [
      "AI-powered trip planning",
      "Location-based recommendations",
      "Offline maps and navigation",
      "Language translation",
      "Budget tracking",
      "Weather forecasts"
    ]
  },
  {
    id: 4,
    title: "Finance Dashboard",
    category: "Web Application",
    tags: ["Web", "Finance", "Dashboard"],
    image: "/images/portfolio.png",
    description: "A comprehensive financial analytics dashboard providing real-time insights into market trends, portfolio performance, and investment opportunities. Features interactive charts, customizable widgets, and automated reporting.",
    languages: [
      { name: "TypeScript", percentage: 40 },
      { name: "React", percentage: 35 },
      { name: "Python", percentage: 15 },
      { name: "SQL", percentage: 10 }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clientName: "FinTech Solutions",
    completionDate: "2023-09-05",
    projectUrl: "https://example.com/finance-dashboard",
    features: [
      "Real-time market data",
      "Portfolio tracking and analysis",
      "Interactive data visualization",
      "Customizable dashboard widgets",
      "Automated reports and alerts",
      "Secure authentication"
    ]
  },
  {
    id: 5,
    title: "Educational Content Platform",
    category: "Web Application",
    tags: ["Web", "Education", "SaaS"],
    image: "/images/portfolio.png",
    description: "A comprehensive learning management system for educational institutions. Features include course creation and management, interactive content delivery, student progress tracking, and automated assessments with detailed analytics.",
    languages: [
      { name: "JavaScript", percentage: 35 },
      { name: "PHP", percentage: 25 },
      { name: "Python", percentage: 20 },
      { name: "HTML/CSS", percentage: 20 }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clientName: "EduTech Innovations",
    completionDate: "2023-08-15",
    projectUrl: "https://example.com/edu-platform",
    features: [
      "Course management system",
      "Interactive content creation tools",
      "Student progress tracking",
      "Automated assessments and grading",
      "Discussion forums and collaboration tools",
      "Performance analytics and reporting"
    ]
  },
  {
    id: 6,
    title: "Social Media Analytics Tool",
    category: "SaaS",
    tags: ["Web", "Analytics", "SaaS"],
    image: "/images/b1.png",
    description: "A powerful analytics platform for social media managers and marketing teams. Provides comprehensive insights into audience engagement, content performance, and competitor analysis across multiple social media platforms.",
    languages: [
      { name: "Python", percentage: 45 },
      { name: "JavaScript", percentage: 30 },
      { name: "R", percentage: 15 },
      { name: "HTML/CSS", percentage: 10 }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    clientName: "SocialPro Analytics",
    completionDate: "2023-07-20",
    projectUrl: "https://example.com/social-analytics",
    features: [
      "Multi-platform data aggregation",
      "Sentiment analysis",
      "Engagement metrics tracking",
      "Content performance analytics",
      "Competitor analysis",
      "Automated reporting"
    ]
  }
];

// Function to get project by ID
export const getProjectById = (id: number | string): Project | undefined => {
  const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
  return projectsData.find(project => project.id === numericId);
};

// Function to get related projects based on category and tags
export const getRelatedProjects = (currentProject: Project, limit: number = 3): Project[] => {
  return projectsData
    .filter(project => 
      project.id !== currentProject.id && 
      (project.category === currentProject.category || 
       project.tags.some(tag => currentProject.tags.includes(tag)))
    )
    .slice(0, limit);
};
