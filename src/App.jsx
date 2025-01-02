import About from "./components/About";
import Hero from "./components/Hero";

import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <main className="overflow-x-hidden relative w-screen min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
