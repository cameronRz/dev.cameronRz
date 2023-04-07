import { contactSectionContent } from '../support/portfolio-data';
import '../assets/scss/contact.scss';

const Contact = () => {
  if (!contactSectionContent.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${contactSectionContent.email}`}>
        <span className="btn btn--outline">
          Email me
        </span>
      </a>
    </section>
  );
};

export default Contact;
