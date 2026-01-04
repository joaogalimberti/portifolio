import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal(); // ← ativa o reveal no site inteiro

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
