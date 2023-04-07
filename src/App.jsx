import { useTheme } from './hooks/useTheme';
import './assets/scss/global.scss';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} app`}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
