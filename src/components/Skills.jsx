import { v4 as uuid } from 'uuid';
import { skillsSectionContent } from '../support/portfolio-data';
import '../assets/scss/skills.scss';

const Skills = () => {
  if (!skillsSectionContent.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skillsSectionContent.map((skill) => (
          <li key={uuid()} className="skills__list-item btn btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
