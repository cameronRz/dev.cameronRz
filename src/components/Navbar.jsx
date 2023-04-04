import { useState } from 'react';
import { projects, skills, contact } from '../support/portfolio-data';
import { useTheme } from '../hooks/useTheme';
import { DARK_THEME } from '../support/constants';
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
        {projects.length ? (
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

        {skills.length ? (
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

        {contact.email ? (
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
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {theme === DARK_THEME ? 'SUN ICON' : 'MOON ICON'}
      </button>

      <button
        type="button"
        onClick={toggleNavbarVisibility}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {navbarVisible ? 'CLOSE ICON' : 'MENU ICON'}
      </button>
    </nav>
  );
};

export default Navbar;
