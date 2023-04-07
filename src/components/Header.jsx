import { headerSectionContent } from '../support/portfolio-data';
import Navbar from './Navbar';
import '../assets/scss/header.scss';
import Icon from './Icon';

const Header = () => {
  return (
    <header className="header center">
      <h3>
        {headerSectionContent.homepage && (
          <a href={headerSectionContent.homepage} className="link link--icon header__logo">
            <Icon name="github" />
          </a>
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
