import Link from "next/link";

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
  certificateUrl?: string;
}

const projects: Project[] = [
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

const education: Education[] = [
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
            <div key={project.id} >
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
          ))}
        </section>
        <hr/>
        <section id="education">
          <h2>EDUCACIÓN Y CERTIFICACIONES</h2>
          {education.map((edu) => (
            <div key={edu.id} >
              <h3>{edu.title}</h3>
              <p>{edu.institution}</p>
              <span>{edu.date}</span>
            </div>
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