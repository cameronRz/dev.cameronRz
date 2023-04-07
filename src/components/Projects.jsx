import { v4 as uuid } from 'uuid';
import Project from './Project';
import { projectsArray } from '../support/portfolio-data';
import '../assets/scss/projects.scss';

const Projects = () => {
  if (!projectsArray.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projectsArray.map(project => (
          <Project key={uuid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
