import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-pad px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="What I've built" title="Projects" />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
