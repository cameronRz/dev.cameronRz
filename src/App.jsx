import { useTheme } from './hooks/useTheme';
import './assets/scss/global.scss';
import Header from './components/Header';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} app`}>
      <Header />
      <main>
        <h1>Hello</h1>
        {/*<About />*/}
        {/*<Projects />*/}
        {/*<Skills />*/}
        {/*<Contact />*/}
      </main>
      {/*<Footer />*/}
    </div>
  );
}

export default App;
