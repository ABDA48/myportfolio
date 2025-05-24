
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

// Add all translations here
const translations: Translations = {
  en: {
    home: "Home",
    services: "Services",
    servicedesc: "Service I provide",
    projects: "Projects",
    projectdesc: "Projects I have done",
    about: "About",
   
    aboutme: "About Me",
    whoami: "Jaolaza Abdallah Marcel",
    whoamidesc:"I'm a web designer and developer with 8+ years of experience crafting high-performance, visually engaging digital products. I blend creative design with technical skill and AI to build smarter, more dynamic user experiences.",


    blog: "Blog",
    contact: "Contact Me",
    blogTitle: "My Blog",

    im:"I'm",
    heroName: "Jaolaza Abdallah Marcel",
    heroTitle: "Web Developer &",
    heroSubtitle: "AI Expert",
    heroDescription: "Driven by a passion for innovation, I craft intelligent AI solutions, cutting-edge web platforms, and sleek Android apps — blending automation, modern design, and smart user experiences. From AI-powered applications to hands-on training, I turn ideas into scalable, human-centered tech products that inspire and perform.",
    heroButton: "Hire Me",
    heroWhatsapp: "WhatsApp",
    heroHello: "Hello!",
    preview: "Preview",
    details: "Details",
    projectscompleted: "Projects Completed",
    happyclients: "Happy Clients",
    yearsofexperience: "Years of Experience",

    contacttitle: "Get in Touch",
    contactdesc: "Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing together.",
    yourname: "Your Name",
    subject: "Subject",
    message: "Message",
    sendmessage: "Send Message",
    youremail: "Your Email",
    contactusforpricing: "Contact us for pricing",
    blogSubtitle: "Thoughts, ideas, and insights about design, development, and technology.",
    searchPlaceholder: "Search articles...",
    readMore: "Read More",
    loadMore: "Load More",
    resetSearch: "Reset Search",
    noArticles: "No articles found matching your search.",
    comments: "Comments",
    addComment: "Add Comment",
    yourComment: "Your comment",
    submit: "Submit",
    leaveComment: "Leave a comment",
    viewAll: "View All",
    viewallprojects: "View All Projects",
    downloadcv: "Download My CV",
    // Project detail page translations
    testimonials: "Client Testimonials",
    testimonialsdesc: "What My Clients Say",
    testimonialimpact: "The Impact of My Work:",

    projectDetails: "Project Details",
    clientName: "Client",
    completionDate: "Completion Date",
    projectUrl: "Project URL",
    projectFeatures: "Key Features",
    technologies: "Technologies Used",
    visitWebsite: "Visit Website",
    videoPreview: "Video Preview",
    relatedProjects: "Related Projects",
    backToProjects: "Back to Projects",
    description: "Description"
  },
  fr: {
    home: "Accueil",
    services: "Services",
    servicedesc: "Services Que je fournis",
    projects: "Projets",
    projectdesc: "Projets Que j'ai réalisé",
    about: "À Propos",
    blog: "Blog",
    contact: "Me Contacter",
    blogTitle: "Mon Blog",
    aboutme: "À Propos de Moi",
    whoami: "Jaolaza Abdallah Marcel",
    whoamidesc:"Je suis un concepteur web et développeur avec plus de 8 ans d'expérience dans la création de produits numériques performants et visuellement engageants. Je mélange le design créatif avec les compétences techniques et l'IA pour construire des expériences utilisateur plus intelligentes et dynamiques.",
    yourname: "Votre Nom",
    subject: "Sujet",
    message: "Message",
    sendmessage: "Envoyer un Message",
    youremail: "Votre Email",
    im:"Je suis",
    heroName: "Jaolaza Abdallah Marcel",
    heroTitle: "Développeur Web &",
    heroSubtitle: "Expert IA",
    heroDescription: "Animé par une passion pour l'innovation, je conçois des solutions d'IA intelligentes, des plateformes web modernes et des applications Android élégantes — alliant automatisation, design soigné et expériences utilisateur intelligentes. Des applications propulsées par l’IA aux formations pratiques, je transforme les idées en produits technologiques évolutifs, centrés sur l’humain, inspirants et performants.",
    heroHello: "Bonjour!",
    heroWhatsapp: "WhatsApp",
    heroButton: "Embauchez-moi",
    preview: "Aperçu",
    details: "Détails",
    projectscompleted: "Projets Terminés",
    happyclients: "Clients Satisfaits",
    yearsofexperience: "Années d'Expérience",
    downloadcv: "Télécharger Mon CV",
    contactusforpricing: "Contactez-nous pour un devis",

    testimonials: "Témoignages des Clients",
    testimonialsdesc: "Ce que Mes Clients Disent ",
    testimonialimpact: "L'Impact de Mon Travail:",

    contacttitle: "Contactez-Moi",
    contactdesc: "Vous avez un projet en tête ou souhaitez collaborer ? N'hésitez pas à me contacter et créons ensemble quelque chose de fantastique.",

    blogSubtitle: "Réflexions, idées et perspectives sur le design, le développement et la technologie.",
    searchPlaceholder: "Rechercher des articles...",
    readMore: "Lire Plus",
    loadMore: "Charger Plus",
    resetSearch: "Réinitialiser la Recherche",
    noArticles: "Aucun article trouvé correspondant à votre recherche.",
    comments: "Commentaires",
    addComment: "Ajouter un Commentaire",
    yourComment: "Votre commentaire",
    submit: "Envoyer",
    leaveComment: "Laissez un commentaire",
    viewAll: "Voir Tout",
    viewallprojects: "Voir Tous Les Projets",
    // Project detail page translations
    projectDetails: "Détails du Projet",
    clientName: "Client",
    completionDate: "Date d'achèvement",
    projectUrl: "URL du Projet",
    projectFeatures: "Caractéristiques Clés",
    technologies: "Technologies Utilisées",
    visitWebsite: "Visiter le Site Web",
    videoPreview: "Aperçu Vidéo",
    relatedProjects: "Projets Similaires",
    backToProjects: "Retour aux Projets",
    description: "Description"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
