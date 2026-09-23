import { Project, Education } from "@/types/portfolio";

export const projects: Project[] = [
    {
    id: 1,
    title: "CineMatch",
    description: "A modern and responsive movie discovery application built with...",
    image: "/assets/img/cine_match_demo.png",
    technologies: ["Next", "JavaScript (ES6+)", "Tailwind CSS", "TMDB API", "Git & GitHub"],
    demo: "https://cinematch-git-main-hector-hacid.vercel.app/",
    githubUrl: "https://github.com/Hacid30/cinematch"
    },
    {
        id: 2,
        title: "React Task Manager",
        description: "A high-performance React Task Manager featuring persistent storage, advanced filtering, and a polished user interface....",
        image: "/assets/img/task_manager_demo.png",
        technologies: [ "HTML5", "CSS3", "React", "TypeScript", "Vite", "ViteTest"],
        demo: "https://task-manager-react-peach.vercel.app/",
        githubUrl: "https://github.com/Hacid30/task-manager-REACT"
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