import { aboutSectionContent } from '../support/portfolio-data';
import profileImage from '../assets/images/me.jpg';
import resume from '../assets/docs/cameron-resume.pdf';
import Icon from './Icon';
import '../assets/scss/about.scss';

const About = () => {
  const { name, role, description } = aboutSectionContent;

  return (
    <div className="about center">
      <img src={profileImage} alt="Me" className="about__image" />

      {name && (
        <h1>
          Hi, I'm <span className="about__name">{name}</span>
        </h1>
      )}
      {role && <h2 className="about__role">{role}</h2>}

      <section className="section">
        <h2 className="section__title">About Me</h2>
        <p className="about__bio">{description && description}</p>
      </section>

      <div className="about__contact center">
        {resume && (
          <a href={resume} download>
            <span className="btn btn--outline">
              Resume <Icon name="download" size="lg" />
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default About;
