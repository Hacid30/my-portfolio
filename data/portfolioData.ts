import { Project, Education, HeroLinks } from "@/types/portfolio";

export const projects: Project[] = [
    {
        id: 1,
        title: "MyStore - E-Commerce App",
        description: "A modern e-commerce web application built with Next.js, featuring global state management with Zustand and authentication.",
        image: "/assets/img/mystore-e-commerce app_demo.png",
        technologies: ["Next", "React", "Tailwind CSS", "Zustand", "Auth.js / NextAuth.js", "Git & GitHub"],
        demo: "https://nextjs-ecommerce-vert-nu.vercel.app/",
        githubUrl: "https://github.com/Hacid30/nextjs-ecommerce"
    },
    {
        id: 2,
        title: "React Task Manager",
        description: "A high-performance React Task Manager featuring persistent storage, advanced filtering, TypeScript, and unit tests with ViteTest.",
        image: "/assets/img/task_manager_demo.png",
        technologies: ["HTML5", "CSS3", "React", "TypeScript", "Vite", "ViteTest"],
        demo: "https://task-manager-react-peach.vercel.app/",
        githubUrl: "https://github.com/Hacid30/task-manager-REACT"
    },
    {
        id: 3,
        title: "CineMatch",
        description: "A modern and responsive movie discovery application built with Next.js and Tailwind CSS, consuming the TMDB API.",
        image: "/assets/img/cine_match_demo.png",
        technologies: ["Next", "JavaScript (ES6+)", "Tailwind CSS", "TMDB API", "Git & GitHub"],
        demo: "https://cinematch-git-main-hector-hacid.vercel.app/",
        githubUrl: "https://github.com/Hacid30/cinematch"
    },
    {
        id: 4,
        title: "FinTech Dashboard",
        description: "A modern, interactive cryptocurrency digital wallet dashboard built with React, Vite, and the CoinGecko API.",
        image: "/assets/img/fintech_dashboard_demo.png",
        technologies: ["React", "Vite", "JavaScript (ES6)", "HTML5", "CSS3"],
        demo: "https://fitntech-dashboard.vercel.app/",
        githubUrl: "https://github.com/Hacid30/fitntech-dashboard"
    },
    {
        id: 5,
        title: "WEATHER-APP",
        description: "Weather web application that helps us find the weather in a specific city using WeatherAPI and asynchronous Fetch calls.",
        image: "/assets/img/weather-app_demo.png",
        technologies: ["React", "Vite", "JavaScript (ES6)", "HTML5", "CSS3"],
        demo: "https://react-weather-app-za4h.vercel.app/",
        githubUrl: "https://github.com/Hacid30/react-weather-app"
    },
    {
        id: 6,
        title: "Administrador de Gastos (v1.2)",
        description: "Aplicación web para registrar, visualizar y administrar gastos personales por categorías con persistencia en LocalStorage.",
        image: "/assets/img/administrador_de_gastos_(v1.2)_demo.png",
        technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "LocalStorage (Web Storage API)"],
        demo: "https://hacid30.github.io/administrador-gastos-js/",
        githubUrl: "https://github.com/Hacid30/administrador-gastos-js"
    }
];

export const education: Education[] = [
    {
        id: 1,
        title: 'TÉCNICO EN SISTEMAS',
        institution: 'SENA - EL SERVICIO NACIONAL DE APRENDIZAJE',
        date: '01 DE DICIEMBRE DE 2011'
    },
    {
        id: 2,
        title: 'DIPLOMADO EN FUNDAMENTOS DE PROGRAMACIÓN EN LENGUAJE PYTHON',
        institution: 'EL MINISTERIO DE TECNOLOGÍAS DE LA INFORMACIÓN Y LAS COMUNICACIONES Y LA UNIVERSIDAD TECNOLÓGICA DE BOLIVAR',
        date: '12 DE JULIO DE 2022'
    },
    {
        id: 3,
        title: 'DIPLOMADO EN PROGRAMACIÓN BÁSICA EN LENGUAJE JAVA',
        institution: 'EL MINISTERIO DE TECNOLOGÍAS DE LA INFORMACIÓN Y LAS COMUNICACIONES Y LA UNIVERSIDAD TECNOLÓGICA DE BOLIVAR',
        date: '05 DE SEPTIEMBRE DE 2022'
    },
    {
        id: 4,
        title: 'DESARROLLO DE SOFTWARE',
        institution: 'EL MINISTERIO DE TECNOLOGÍAS DE LA INFORMACIÓN Y LAS COMUNICACIONES Y LA UNIVERSIDAD TECNOLÓGICA DE BOLIVAR',
        date: '27 DE OCTUBRE DE 2022'
    },
    {
        id: 5,
        title: 'DIPLOMADO EN DESARROLLO DE APLICACIONES WEB',
        institution: 'EL MINISTERIO DE TECNOLOGÍAS DE LA INFORMACIÓN Y LAS COMUNICACIONES Y LA UNIVERSIDAD TECNOLÓGICA DE BOLIVAR',
        date: '15 DE DICIEMBRE DE 2022'
    },
    {
        id: 6,
        title: 'INTRODUCCIÓN A LA PROGRAMACIÓN EN JAVASCRIPT',
        institution: 'EL MINTIC Y LA UNIVERSIDAD DISTRITAL FRANCISCO JOSÉ DE CALDAS',
        date: 'DICIEMBRE DE 2023'
    }
];

export const heroLink: HeroLinks[] = [
    {
        id: 1,
        label: 'Mis proyectos',
        link: '#projects'
    },
    {
        id: 2,
        label: 'Contacto / Redes',
        link: '#contact'
    },
    {
        id: 3,
        label: 'Educación y Certificaciones',
        link: '#education'
    }
];