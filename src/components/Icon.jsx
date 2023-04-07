import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBars, faMoon, faSun, faXmark, faDownload } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ name, size }) => {
  const getFaIcon = () => {
    switch (name) {
      case 'sun':
        return faSun;
      case 'moon':
        return faMoon;
      case 'close':
        return faXmark;
      case 'menu':
        return faBars;
      case 'github':
        return faGithub;
      case 'download':
        return faDownload;
      case 'launch':
        return faArrowUpRightFromSquare;
      default:
        throw new Error('Invalid icon name');
    }
  };

  return (
    <FontAwesomeIcon icon={getFaIcon()} size={size ?? 'xl'} />
  );
};

export default Icon;
