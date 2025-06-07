/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Arashi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Mohamed Issam Akallal",
  logo_name: "MohamedIssamAkallal",
  nickname: "Arashi",
  subTitle:
    "Étudiant passionné en cybersécurité, cherchant à développer des compétences en protection des systèmes et des données contre les menaces numériques.",
  resumeLink:
    "https://drive.google.com/drive/u/0/folders/1DIcUVqinlhFv6Flw8QYO0dUxNN-vjH-V",
  portfolio_repository: "https://github.com/NINJAxARASHI?tab=repositories",
  githubProfile: "https://github.com/NINJAxARASHI?tab=repositories",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/NINJAxARASHI?tab=repositories",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/med-issam-akallal-6ab9a9324",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:medissamakallal@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Langues",
      fileName: "LanguagesImg",
      skills: [
        "Arabe : Langue natale",
        "Anglais : Niveau B2",
        "Espagnol : Niveau scolaire",
        "Français : Niveau C1",
      ],
      softwareSkills: [],
    },
    {
      title: "Cybersécurité",
      fileName: "CybersecurityImg",
      skills: [
        "Classement dans le top 7% des utilisateurs sur la plateforme TryHackMe, démontrant un niveau décent en hacking éthique et résolution de défis en cybersécurité.",
        "Analyse des vulnérabilités et des menaces",
        "Mise en place de mesures de sécurité pour protéger les systèmes",
        "Utilisation d'outils de sécurité pour la détection et la prévention des attaques",
      ],
      softwareSkills: [
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Metasploit",
          fontAwesomeClassname: "simple-icons:metasploit",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Nmap",
          fontAwesomeClassname: "simple-icons:nmap",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Développement Web",
      fileName: "WebDevImg",
      skills: [
        "⚡ Création de sites web sécurisés",
        "⚡ Utilisation de frameworks modernes pour le développement front-end et back-end",
        "⚡ Intégration de bonnes pratiques de sécurité dans le code",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
      ],
    },
  ],
};

// Competitive Sites Section
const competitiveSites = {
  title: "Basic Qualification and Certifications", // Ce titre devrait déjà être présent
  competitiveSites: [
    {
      skillName: "TryHackMe", // Nom affiché au survol (tooltip)
      image: "THM_logo.png", // Le chemin de l'image dans src/assets/images/
      animationDuration: 1000, // Durée de l'animation d'apparition (en ms)
    },
    {
      skillName: "Nmap",
      image: "nmap_logo.jpeg",
      animationDuration: 1000,
    },
    {
      skillName: "Wireshark",
      image: "wireshark_logo-removebg-preview.png",
      animationDuration: 1000,
    },
    {
      skillName: "Snort",
      image: "snort_logo.png",
      animationDuration: 1000,
    },
    {
      skillName: "John The Ripper",
      image: "john_logo-removebg-preview.png",
      animationDuration: 1000,
    },
    {
      skillName: "Python",
      image: "python_logo.png",
      animationDuration: 1000,
    },
    // Si vous aviez d'autres sites de compétition (comme LeetCode, HackerRank, etc.),
    // ils seront remplacés par ceux-ci.
  ],
};
const degrees = {
  degrees: [
    {
      title: "Institut National des Postes et Télécommunications",
      subtitle: "Étudiant en cybersécurité",
      logo_path: "Inpt_logo.jpeg",
      alt_name: "INPT",
      duration: "2024-2025",
      descriptions: [
        "Étudiant à l'Institut national des postes et télécommunication dans le domaine de la cyber sécurité.",
      ],
      website_link: "https://www.inpt.ac.ma/",
    },
    {
      title: "Grandes écoles d'ingénieurs (MP)",
      subtitle: "Classement 179 au niveau national",
      logo_path: "CPGE.png",
      alt_name: "Grandes écoles d'ingénieurs",
      duration: "2023-2024",
      descriptions: [
        "Admis aux grandes écoles d'ingénieurs (Classement 179 au niveau national dans la filière MP).",
      ],
      website_link: "#",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "TryHackMe - Pre Security",
      subtitle: "- TryHackMe",
      logo_path: "THM_logo.png",
      certificate_link:
        "https://drive.google.com/drive/u/0/folders/1ot_6jkMoxmTZ5GrRQdYT1WxIA4RtC5x8",
      alt_name: "TryHackMe",
      color_code: "#212121",
    },
    {
      title: "TryHackMe - Web Fundamentals",
      subtitle: "- TryHackMe",
      logo_path: "THM_logo.png",
      certificate_link:
        "https://drive.google.com/drive/u/0/folders/1ot_6jkMoxmTZ5GrRQdYT1WxIA4RtC5x8",
      alt_name: "TryHackMe",
      color_code: "#212121",
    },
    {
      title: "TryHackMe - Security 101",
      subtitle: "- TryHackMe",
      logo_path: "THM_logo.png",
      certificate_link:
        "https://drive.google.com/drive/u/0/folders/1ot_6jkMoxmTZ5GrRQdYT1WxIA4RtC5x8",
      alt_name: "TryHackMe",
      color_code: "#212121",
    },
    {
      title: "TryHackMe - Jr Penetration Tester",
      subtitle: "- TryHackMe",
      logo_path: "THM_logo.png",
      certificate_link:
        "https://drive.google.com/drive/u/0/folders/1ot_6jkMoxmTZ5GrRQdYT1WxIA4RtC5x8",
      alt_name: "TryHackMe",
      color_code: "#212121",
    },
  ],
};

// Experience Page
const experience = {
  title: "Expériences",
  subtitle: "Projets et Stages",
  description:
    "Voici quelques expériences et projets réalisés dans le domaine de la cybersécurité et de l'informatique.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Projets",
      work: true,
      experiences: [
        {
          title: "CRÉATION D'UNE PLATEFORME D'ÉCHANGE DE FICHIERS",
          company: "Projet personnel",
          company_url: "#",
          logo_path: "project_logo.png",
          duration: "2025",
          location: "Maroc",
          description: [
            "Développement d'une solution sécurisée pour le partage de fichiers entre utilisateurs.",
            "Mise en place de mesures de contrôle d'accès et de gestion des permissions.",
          ],
          color: "#005a9c",
        },
        {
          title: "ADMINISTRATION D'UN RÉSEAU LOCAL (PAR SIMULATION)",
          company: "Projet académique",
          company_url: "#",
          logo_path: "project_logo.png",
          duration: "2025",
          location: "Maroc",
          description: [
            "Configuration et gestion d'un réseau local pour assurer la connectivité et la sécurité.",
            "Supervision des performances et résolution des problèmes techniques.",
          ],
          color: "#00796b",
        },
        {
          title: "DÉVELOPPEMENT D'UN SITE WEB",
          company: "Projet personnel",
          company_url: "#",
          logo_path: "project_logo.png",
          duration: "2025",
          location: "Maroc",
          description: [
            "Création d'un site web simple en utilisant HTML, CSS, JavaScript.",
            "Hébergement et maintenance du site.",
          ],
          color: "#e65100",
        },
        {
          title: "COFFRE-FORT DE MOTS DE PASSE",
          company: "Projet personnel",
          company_url: "#",
          logo_path: "project_logo.png",
          duration: "2025",
          location: "Maroc",
          description: [
            "Développement d'une application sécurisée pour stocker et gérer les mots de passe.",
            "Implémentation de chiffrement fort pour protéger les données sensibles.",
            "Génération de mots de passe sécurisés pour différents services (Gmail, Facebook, Instagram).",
          ],
          color: "#4a148c",
        },
      ],
    },
    {
      title: "Stages",
      experiences: [
        {
          title: "Aucun stage pour le moment",
          company: "",
          company_url: "#",
          logo_path: "project_logo.png",
          duration: "",
          location: "",
          description: [
            "En recherche active de stages dans le domaine de la cybersécurité.",
          ],
          color: "#9c27b0",
        },
      ],
    },
    {
      title: "Volunteering",
      experiences: [
        {
          title: "Tutorat et accompagnement pédagogique",
          company: "Projet académique",
          company_url: "#",
          logo_path: "tutorat_logo.png",
          duration: "2024-2025",
          location: "Maroc",
          description:
            "Explication de modules de cybersécurité et informatique à des camarades pour les examens. Conception de supports pédagogiques pour faciliter l'apprentissage.",
          color: "#6a1b9a",
        },
        {
          title: "Membre actif du CIT",
          company: "Club d'Innovation et Technologie (CIT)",
          company_url: "#",
          logo_path: "cit_logo.png",
          duration: "2024-2025",
          location: "INPT, Maroc",
          description: [
            "Participation active aux activités du club CIT.",
            "Contribution à l'organisation d'ateliers et d'événements technologiques.",
          ],
          color: "#1976d2",
        },
        {
          title: "Membre de l'équipe d'organisation IDEH & JNJD 2025",
          company: "INPT",
          company_url: "#",
          logo_path: "inpt_logo.jpeg",
          duration: "2024-2025",
          location: "INPT, Maroc",
          description: [
            "Organisation et gestion logistique des événements IDEH et JNJD 2025.",
            "Coordination avec les intervenants et les participants.",
          ],
          color: "#388e3c",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpg",
    description:
      "Je suis disponible sur LinkedIn et GitHub. N'hésitez pas à me contacter, je répondrai dans les 24 heures.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Je partage mes expériences et connaissances en cybersécurité.",
    link: "https://github.com/NINJAxARASHI?tab=repositories",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Maroc",
    locality: "Rabat",
    country: "Maroc",
    region: "Rabat-Salé-Kénitra",
    postalCode: "10000",
    streetAddress: "INPT",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Institut+National+des+Postes+et+T%C3%A9l%C3%A9communications/@33.9982,-6.8517,17z",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  contactPageData,
};
