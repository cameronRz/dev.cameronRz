import { aboutSectionContent } from '../support/portfolio-data';
import profileImage from '../assets/images/me.jpg';
import '../assets/scss/about.scss';

const About = () => {
  const { name, role, description, resume } = aboutSectionContent;

  return (
    <div className="about center">
      <img src={profileImage} alt="Me" height="150" width="150" style={{borderRadius: '50%', overflow: 'hidden', margin: '3em', boxShadow: 'rgba(100, 100, 111, 0.2) 0 7px 29px 0'}} />

      {name && (
        <h1>
          Hi, I'm <span className="about__name">{name}</span>
        </h1>
      )}

      {role && <h2 className="about__role">{role}</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span className="btn btn--outline">
              Resume
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default About;
