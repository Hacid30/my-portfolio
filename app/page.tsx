import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { EducationCard } from "@/components/EducationCard";
import { projects, education, heroLink } from "@/data/portfolioData";

export default function Home() {
  return (
    <div>
      <main className="bg-slate-950 text-slate-100 max-w-4xl mx-auto px-4 min-h-screen py-12">
        <section>
        <h1 className="text-2xl text-sky-400 font-bold ">Héctor Hacid Julio Meza - Desarrollador Frontend Junior</h1>
        <p className="text-slate-400 mb-4" >Desarrollador Frontend Junior dedicado a construir interfaces web modernas con React, TypeScript y Next.js.</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {heroLink.map((hl) => (
            <Link 
              key={hl.id}  
              href={hl.link} 
              className="border border-transparent bg-slate-800 rounded-full px-4 py-2 hover:bg-slate-700 hover:border-sky-500 transition-colors">
              {hl.label}
            </Link>
          ))}
        </div>

        </section>
          <hr className="border-slate-800"/>
          <section id="projects">
            <h2 className="text-xl font-bold text-slate-200 mb-6 mt-3">MIS PROYECTOS</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
            {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
            ))}
            </div>
        </section>

        <hr className="border-slate-800"/>
        <section id="education">
          <h2 className="text-xl font-bold text-slate-200 mb-6 mt-3" >EDUCACIÓN Y CERTIFICACIONES</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
          {education.map((edu) => (
            <EducationCard
              key={edu.id}
              edu={edu}
            />
          ))}
          </div>
        </section>

        <hr className="border-slate-800"/>
        <section id="contact">
          <h2 className="text-xl font-bold text-slate-200 mb-6 mt-3">CONTACTO</h2>
          <div className="flex flex-wrap gap-3">
            <a 
              href="mailto:hectorhacid@gmail.com"
              className="bg-slate-800 border border-transparent rounded-full px-4 py-2 hover:bg-slate-700 hover:border-sky-500 transition-colors"
            >
              hectorhacid@gmail.com
            </a>
            <a 
              href="https://github.com/Hacid30" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800 border border-transparent rounded-full px-4 py-2 hover:bg-slate-700 hover:border-sky-500 transition-colors"
            >
              GitHub
            </a>
            <a 
              href='https://www.linkedin.com/in/héctor-hacid-julio-meza-16024025a'
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 border border-transparent rounded-full px-4 py-2 hover:bg-slate-700 hover:border-sky-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}