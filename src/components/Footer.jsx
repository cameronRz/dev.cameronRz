import '../assets/scss/footer.scss';

const Footer = () => (
  <footer className="footer">
    <a
      href="https://github.com/cameronRz"
      className="link footer__link"
    >
      Cameron Ramirez &copy; {(new Date().getFullYear())}
    </a>
  </footer>
);

export default Footer;
