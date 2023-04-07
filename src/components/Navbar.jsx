import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { projectsArray, skillsSectionContent, contactSectionContent } from '../support/portfolio-data';
import { DARK_THEME } from '../support/constants';
import Icon from './Icon.jsx';
import '../assets/scss/navbar.scss';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbarVisibility = () => setNavbarVisible(!navbarVisible);

  return (
    <nav className="center nav">
      <ul
        style={{ display: navbarVisible ? 'flex' : null }}
        className="nav__list"
      >
        {projectsArray.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavbarVisibility}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {skillsSectionContent.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavbarVisibility}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
        ) : null}

        {contactSectionContent.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavbarVisibility}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {theme === DARK_THEME ? <Icon name="sun" /> : <Icon name="moon" />}
      </button>

      <button
        onClick={toggleNavbarVisibility}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {navbarVisible ? <Icon name="close" /> : <Icon name="menu" />}
      </button>
    </nav>
  );
};

export default Navbar;
