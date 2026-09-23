import { Project } from "@/types/portfolio";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return(
    <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <img src={project.image} alt={`Captura de pantalla de ${project.title}`}  />
        <div>
            {project.technologies.map((tech) => (
            <span key={tech}>
                {tech}
            </span>
            ))}
        </div>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Github</a>
    </div>
    )
}
