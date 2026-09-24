import { Project } from "@/types/portfolio";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return(
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-sky-500/50 shadow-lg hover:shadow-sky-500/20">
        <img 
            src={project.image} 
            alt={`Captura de pantalla de ${project.title}`}
            className="h-48 w-full object-cover"
        />
        <div className="p-5">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap mb-5 gap-2">
                {project.technologies.map((tech) => (
                <span 
                key={tech}
                className="bg-slate-800 text-xs px-2.5 py-1 rounded-full text-slate-300"
                >
                    {tech}
                </span>
                ))}
            </div>
            <div className="flex flex-wrap gap-2">
                <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-slate-700 border border-transparent px-4 py-2 rounded-full hover:bg-slate-800 hover:border-sky-500 transition-colors"
                >
                    Demo
                </a>
                <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-700 border border-transparent px-4 py-2 rounded-full hover:bg-slate-800 hover:border-sky-500 transition-colors"
                >
                    Github
                </a>
            </div>
        </div>
    </div>
    )
}
