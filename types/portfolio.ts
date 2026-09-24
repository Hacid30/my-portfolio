export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demo: string;
    githubUrl: string;
} 

export interface Education {
    id: number;
    title: string;
    institution: string;
    date: string;
}

export interface HeroLinks {
    id: number;
    label: string;
    link: string;
}