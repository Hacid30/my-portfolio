import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { EducationCard } from "@/components/EducationCard";
import { projects, education } from "@/data/portfolioData";

export default function Home() {
  return (
    <div>
      <main>
        <section>
        <h1>Héctor Hacid Julio Meza - Desarrollador Frontend Junior</h1>
        <p>Desarrollador Frontend Junior dedicado a construir interfaces web modernas con React, TypeScript y Next.js.</p>
        <div>
          <Link href={'#projects'}>Mis proyectos</Link>
          <Link href={'#contact'}>Contacto / Redes</Link>
          <Link href={'#education'}>Educación y Certificaciones</Link>
        </div>
        </section>

        <hr/>
        <section id="projects">
          <h2>MIS PROYECTOS</h2>
          {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
          ))}
        </section>
        <hr/>
        <section id="education">
          <h2>EDUCACIÓN Y CERTIFICACIONES</h2>
          {education.map((edu) => (
            <EducationCard
              key={edu.id}
              edu={edu}
            />
          ))}
        </section>
        <hr/>
        <section id="contact">
          <h2>Contacto</h2>
          <span>Email:</span>
          <a href="mailto:hectorhacid@gmail.com">hectorhacid@gmail.com</a>
          <a href="https://github.com/Hacid30" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href='https://www.linkedin.com/in/héctor-hacid-julio-meza-16024025a' target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </section>

      </main>
    </div>
  );
}