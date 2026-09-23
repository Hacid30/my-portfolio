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