import { header } from '../support/portfolio-data';
import Navbar from './Navbar';
import '../assets/scss/header.scss';

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
