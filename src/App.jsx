import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';

const App = () => {

  return (
    <>

    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">

     <Header />
     <Hero />
     <About />
     <Experience />
     <Projects />
     <Footer />

    </div>

    <ButtonGradient />
    </>
  );
};

export default App
